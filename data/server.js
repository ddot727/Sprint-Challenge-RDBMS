const express = require("express");
const db = require("./dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Mojo-Jo-Jojo" });
});

server.get("/api/projects", async (req, res) => {
  try {
    const projects = await db("projects");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: `Couldn't retrieve projects: ${error}` });
  }
});

server.post("/api/projects", async (req, res) => {
  try {
    const [id] = await db("projects").insert(req.body);
    const project = await db("projects")
      .where({ id: id })
      .first();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post("/api/actions", async (req, res) => {
  try {
    const [id] = await db("actions").insert(req.body);
    const project = await db("actions")
      .where({ id })
      .first();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await db("projects")
      .where({ id: req.params.id })
      .first();
    const actions = await db("actions")
      .select([
        "actions.id",
        "actions.description",
        "actions.notes",
        "actions.done"
      ])
      .where({ project_id: req.params.id });
    project["actions"] = actions;
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = server;

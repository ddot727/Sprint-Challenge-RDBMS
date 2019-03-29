exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      return knex("actions").insert([
        {
          project_id: 1,
          description: "Fork and Clone Project",
          notes: "You should know how to do this"
        },
        {
          project_id: 1,
          description: "Answer self-study questions"
        },
        {
          project_id: 1,
          description: "Finish MVP",
          notes: "Only start on stretch when youre done with mvp"
        },
        {
          project_id: 2,
          description: "Sign up woth your pm"
        },
        {
          project_id: 3,
          description: "Find a project you feel passionate about",
          notes:
            "The more passionate you are about a certain project, the more likely you'll finish it"
        },
        {
          project_id: 3,
          description: "Commit often",
          notes: "It's a great way to get those squares green"
        }
      ]);
    });
};

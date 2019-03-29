exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Sprint Challenge",
          description: "Weekly culminating project",
          done: false
        },
        {
          name: "Build Week",
          description: "Unit culminating project with team",
          done: false
        },
        {
          name: "Side Projects",
          description: "Projects done during spare time",
          done: false
        }
      ]);
    });
};

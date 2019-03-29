const server = require("./data/server");

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n** Ya boi running on http://localhost:${port} **\n`)
);

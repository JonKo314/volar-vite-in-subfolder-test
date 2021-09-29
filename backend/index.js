const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos", function (req, res, next) {
  return res.json([
    { title: "Create test project" },
    { title: "Think of funny test data" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const { mongoose } = require("./database");

//settings
app.set("port", process.env.PORT || 3000);

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//routes
app.use("/api/leaderboard", require("./server/routes/leaderboard.routes"));
app.use("/api/history", require("./server/routes/history.routes"));
app.use("/api/answer", require("./server/routes/answer.routes"));
app.use("/api/students", require("./server/routes/students.routes"));
app.use("/api/users", require("./server/routes/users.routes"));




//starting server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

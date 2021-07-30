const express = require("express");
const cors = require("cors");

const app = express();

const notFound = require("./middleware/not-found");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(cors());

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log(`server is listening to the port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

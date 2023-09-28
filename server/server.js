import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");

const app = express();
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

(async () => {
  try {
    await client.connect();
  } catch (err) {
    return console.log(err);
  }
})();

import("./Controller.js").then((obj) =>
  obj.default(app, client.db("Wordigma"))
);

app.listen(5172);

process.on("SIGINT", async () => {
  await client.close();
  console.log("Приложение завершило работу");
  process.exit();
});

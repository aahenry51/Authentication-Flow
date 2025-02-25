import express from "express";
import cors from "cors";
import { routerLogin } from "./routes/login.js";

const app = express();
const port = 4000;

// CORS
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  console.log("Received data:", receivedData);
  res.json({ message: "Data received successfully!", data: receivedData });
});

app.use("/api", routerLogin);

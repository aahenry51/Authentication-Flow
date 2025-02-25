import express from "express";

export const routerLogin = express.Router();

routerLogin.post("/login", async (request, response) => {
  console.log(`Processing request`);
  response.send({});
  try {
  } catch (error) {
    response.status(400).send(error);
  }
});

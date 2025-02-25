import express from "express";

export const routerLogin = express.Router();

routerLogin.post("/login", async (request, response) => {
  const checkEmail = request.body.email === "alphi" ? "success" : "fail";
  const checkPassword = request.body.password === "1234" ? "success" : "fail";

  const token = {
    email: checkEmail,
    password: checkPassword,
  };

  response.send(token);

  try {
  } catch (error) {
    response.status(400).send(error);
  }
});

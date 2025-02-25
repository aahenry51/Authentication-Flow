import React, { useEffect, useContext, useState } from "react";
//import { AuthContext } from "../../context/AuthContext";
import { getLoginData } from "../../api/requestAPI";
import axios from "axios";
import { axiosAPI } from "../../api/axios";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const signIn = async (values) => {
    let data = await getLoginData(values);
  };

  const handleSubmit = async (event) => {
    console.log("Submit");
    event.preventDefault();
    const response = await signIn(values);
    // Handle the login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

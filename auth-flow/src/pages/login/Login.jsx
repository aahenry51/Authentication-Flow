import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getLoginData } from "../../api/requestAPI";

export const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (values) => {
    let data = await getLoginData(values);
    console.log(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signIn({ email: username, password: password });
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

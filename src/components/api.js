import React, { useState, useEffect, createContext } from "react";
const initialContext = {
  user: {},
  loginUser: () => {}
};
export const ApiContext = createContext(initialContext);
const Api = ({ children }) => {
  // const initialUser = { name: "test", password: null };
  const [user, setUser] = useState();
  const loginUser = creds => {
    console.log(creds);
    const { name, password } = creds;
    if (name === "dauren" && password === "qwerty123") {
      setUser(creds);
    } else {
      setUser(null);
    }
  };
  useEffect(() => {}, [user]);
  const defaultContext = {
    user,
    loginUser
  };

  // useEffect(() => {}, [user]);
  return (
    <ApiContext.Provider value={defaultContext}>{children}</ApiContext.Provider>
  );
};

export default Api;

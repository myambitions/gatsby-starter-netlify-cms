import React, { useState, useEffect, createContext } from "react";
const initialContext = {
  user: {},
  courses: [],
  loginUser: () => {}
};
export const ApiContext = createContext(initialContext);
const Api = ({ children }) => {
  // const initialUser = { name: "test", password: null };
  const [user, setUser] = useState();
  const [courses, setCourses] = useState([]);
  const loginUser = creds => {
    const { name, password } = creds;
    if (name === "dauren" && password === "qwerty123") {
      setUser(creds);
    } else {
      setUser(null);
    }
  };
  const getCourses = () => {
    setCourses(require("../../static/mocks/courses.json"));
  };

  useEffect(() => {
    getCourses();
  }, [user]);
  const defaultContext = {
    user,
    courses,
    loginUser
  };

  return (
    <ApiContext.Provider value={defaultContext}>{children}</ApiContext.Provider>
  );
};

export default Api;

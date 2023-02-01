import { useState, createContext } from "react";
// import LogInContext from "./loginCotext";
export const LogInContext = createContext();

const LogInState = (props) => {
  const [logIn, setLogIn] = useState(false);

  const [formData, setFormData] = useState({});

  return (
    <LogInContext.Provider value={{ logIn, setLogIn, formData, setFormData }}>
      {props.children}
    </LogInContext.Provider>
  );
};

export default LogInState;

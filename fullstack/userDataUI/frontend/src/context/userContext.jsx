import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};

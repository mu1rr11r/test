import { useState, createContext } from "react";

export const AouthContext = createContext();

export default function AoutContextProvider({ children }) {
  const [token, setTokenState] = useState(() => {
    return localStorage.getItem('token') || null;
  });
   function removeToken() {
    setTokenState(null);
    localStorage.removeItem('token');
  }
  function setToken(newToken) {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  }

  function logout() {
    // clear token and other possible auth info
    setToken(null);
  }

  return (
    <AouthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AouthContext.Provider>
  );
}

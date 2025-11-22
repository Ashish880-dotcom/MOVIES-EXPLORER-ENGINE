import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <MovieContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};

// FavoritesContext.js

import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const addToFavoritos = (proyecto) => {
    setFavoritos([...favoritos, proyecto]);
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, addToFavoritos }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}

export default FavoritesContext; // Exporta FavoritesContext como un nombre predeterminado

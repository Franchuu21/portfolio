import React, { useContext, useEffect, useState } from 'react';
import proyectos from '../data';
import FavoritesContext from '../FavoritesContext';
import usuarios from '../usuarios';

function FavoritosView() {
  const { addToFavoritos } = useContext(FavoritesContext);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const usuario = usuarios.usuario1; // Cambia esto según tu lógica para obtener el usuario actual
    const favoritosEnLocalStorage = localStorage.getItem(usuario.id);

    if (favoritosEnLocalStorage) {
      const favoritosIDs = JSON.parse(favoritosEnLocalStorage);
      setFavoritos(favoritosIDs);
    }
  }, []);

  return (
    <div>
      <h2>Proyectos Favoritos</h2>
      <ul>
        {proyectos
          .filter((proyecto) => favoritos.includes(proyecto.id))
          .map((proyecto) => (
            <li key={proyecto.id}>
              {proyecto.titulo} - {proyecto.descripcion}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FavoritosView;

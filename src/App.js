import './App.css';
import "./styles.css";
import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Listado from './components/Listado';
import MyForm from './components/Formulario';
import Creaciones from './components/Creaciones';
import Favoritos from './components/Favoritos';
import AboutUs from './components/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './FavoritesContext'; // Asegúrate de usar la ruta correcta
import usuarios from './usuarios';
import dibujos from './data';
import TarjetasDeProyectos from './components/TarjetasProyectos';
import FavoritosView from './components/FavoritosView';

// Cargar información de favoritos desde localStorage
Object.keys(usuarios).forEach((usuarioId) => {
  const favoritosEnLocalStorage = localStorage.getItem(usuarioId);

  if (favoritosEnLocalStorage) {
    usuarios[usuarioId].favoritos = JSON.parse(favoritosEnLocalStorage);
  }
});

function darFavorito(usuarioId, dibujoId) {
  if (usuarios[usuarioId] && dibujos[dibujoId]) {
    const usuario = usuarios[usuarioId];
    const dibujo = dibujos[dibujoId];

    const yaEsFavorito = usuario.favoritos.some((fav) => fav === dibujoId);

    if (!yaEsFavorito) {
      usuario.favoritos.push(dibujoId);

      // Actualiza localStorage con la nueva lista de favoritos del usuario
      localStorage.setItem(usuarioId, JSON.stringify(usuario.favoritos));

      console.log(`${usuario.nombre} le dio favorito a ${dibujo.nombre}`);
    } else {
      console.log(`${usuario.nombre} ya tiene este dibujo en favoritos`);
    }
  } else {
    console.log('Usuario o dibujo no encontrado');
  }
}

function App() {
  const [comments, setComentarios] = React.useState([])
  console.log("comentario", comments)
  
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Nav />}>
              <Route index element={<Home />} />
              <Route path='/creaciones' element={<Creaciones />} />
              <Route
                path='/favoritos'
                element={<FavoritosView />}
              />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route
                path='/proyectos'
                element={<TarjetasDeProyectos darFavorito={darFavorito} limite={10} />} // Pasa darFavorito como prop
              />
              <Route path='*' element={<h1>Not Found</h1>} />
            </Route>
          </Routes>
          <br></br>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
    
  );
}

export default App;

/*Routes replaces the switch component */

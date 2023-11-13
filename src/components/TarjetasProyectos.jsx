import React, { useState, useContext, useEffect } from 'react';
import proyectos from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Dialog, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoritesContext from '../FavoritesContext';
import usuarios from '../usuarios';

function TarjetasDeProyectos({ limite }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProyecto, setSelectedProyecto] = useState(null);
  const { addToFavoritos } = useContext(FavoritesContext);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Tomar el primer usuario del array
    setUsuario(Object.values(usuarios)[0]);
  }, []);

  const openProyectoDialog = (proyecto) => {
    setSelectedProyecto(proyecto);
    setOpenDialog(true);
  };

  const closeProyectoDialog = () => {
    setOpenDialog(false);
  };

  const darFavorito = (proyectoId) => {
    const usuarioEncontrado = Object.values(usuarios).find((u) => u.id === usuario.id);

    if (usuarioEncontrado) {
      const yaEsFavorito = usuarioEncontrado.favoritos.includes(proyectoId);

      if (!yaEsFavorito) {
        const nuevosFavoritos = [...usuarioEncontrado.favoritos, proyectoId];
        setUsuario({ ...usuarioEncontrado, favoritos: nuevosFavoritos });

        localStorage.setItem(usuarioEncontrado.id, JSON.stringify(nuevosFavoritos));

        console.log(`${usuarioEncontrado.nombre} le dio favorito a ${proyectoId}`);
      } else {
        console.log(`${usuarioEncontrado.nombre} ya tiene este dibujo en favoritos`);
      }
    } else {
      console.log('Usuario no encontrado');
    }
  };

  return (
    <>
      {proyectos.slice(0, limite).map((proyecto) => (
        <Card sx={{ maxWidth: 345 }} key={proyecto.id}>
          <CardActionArea onClick={() => openProyectoDialog(proyecto)}>
            <CardMedia
              component="img"
              height="140"
              image={proyecto.imagenes}
              alt="Imagen del proyecto"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {proyecto.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {proyecto.descripcion}
              </Typography>
              
            </CardContent>
          </CardActionArea>
          <IconButton onClick={() => darFavorito(proyecto.id)}>
                <FavoriteIcon
                  color={
                    usuario && usuario.favoritos && usuario.favoritos.includes(proyecto.id)
                      ? 'secondary'
                      : 'action'
                  }
                />
              </IconButton>
        </Card>
      ))}
      <Dialog open={openDialog} onClose={closeProyectoDialog} fullWidth maxWidth="md">
        {selectedProyecto && (
          <div>
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height="400"
                image={selectedProyecto.imagenes}
                alt="Imagen del proyecto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selectedProyecto.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedProyecto.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Dialog>
    </>
  );
}

export default TarjetasDeProyectos;

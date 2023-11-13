import { useState } from "react";
import '../App.css';

const puntosVerdes = ["Armenia 1809", "Medrano, Charcas y, 1746 Palermo", "Antezana 355", "Bulnes, Sarmiento y, 1176"];

const MyForm = ({ comments, setComentarios }) => {
    const [selectedPuntoVerde, setSelectedPuntoVerde] = useState(""); // Estado para almacenar el punto verde seleccionado

    const updateComentario = () => {
        const nuevoComentario = {
            puntoVerde: selectedPuntoVerde,
            nombreUsuario: document.getElementById("nombreUsuario").value,
            calificacion: document.getElementById("calificacion").value,
            comentario: document.getElementById("comentario").value,
            mail: document.getElementById("mail").value,
        };

        setComentarios([...comments, nuevoComentario]);
    };

    return (
        <div className="one-half column">
  <h2>Contacto</h2>
  <div className="form-container">

    <label htmlFor="nombreUsuario">Nombre</label>
    <input
      type="text"
      name="username"
      className="u-full-width"
      placeholder="Escribe tu Nombre"
      id="nombreUsuario"
    />

    <label htmlFor="calificacion">Asunto</label>
    <textarea
     name="asunto"
     className="u-full-width"
     placeholder="Escribe tu Asunto"
     id="asunto"
    ></textarea>


    <label htmlFor="comentario">Comentario</label>
    <textarea
     name="comment"
     className="u-full-width"
     placeholder="Escribe tu Comentario"
     id="comentario"
    ></textarea>

<label htmlFor="mail">Mail</label>
    <textarea
      name="mail"
      className="u-full-width"
      placeholder="Escribe tu Mail"
      id="mail"
    ></textarea>


    <button
      type="button"
      className="u-full-width button-primary"
      onClick={updateComentario}
    >
      Aceptar
    </button>
  </div>
</div>

    );
};

export default MyForm;

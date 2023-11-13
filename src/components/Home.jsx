import React from "react";
import Listado from './Listado';
import MyForm from './Formulario';
import TarjetasDeProyectos from "./TarjetasProyectos";
import a from '../';
const Home = () => {
    const [comments, setComentarios] = React.useState([])
    return (
    <div>
        <h1>Puntos Verdes</h1>
        <div id="map-container">
        <div className="row">
        <TarjetasDeProyectos limite={4} />
        </div>
        </div>
    
        <div className="container flex" style={{maxWidth: "100%", marginLeft:"3rem", textAlign:"left"}}>
            <div className="row">
            <MyForm comments={comments} setComentarios={setComentarios}></MyForm>
            </div> 
            <Listado comments={comments} setComentarios={setComentarios} />
        </div>
    </div>
    )
}

export default Home;
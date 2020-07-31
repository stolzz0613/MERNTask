import React, { useEffect, useContext } from 'react';
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Listado = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;


    useEffect(() => {
        obtenerProyectos();
    }, [])
    
    if (proyectos.length === 0) return null;


    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default Listado;
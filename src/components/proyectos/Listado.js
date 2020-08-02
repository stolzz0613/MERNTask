import React, { useEffect, useContext } from 'react';
import Proyecto from "./Proyecto";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Listado = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;


    useEffect(() => {
        obtenerProyectos();
    }, [])

    if (proyectos.length === 0) return <p>No hay proyectos comienza creando uno</p>;


    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={400}
                        classNames="proyecto"
                    >
                        <Proyecto
                            key={proyecto.id}
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default Listado;
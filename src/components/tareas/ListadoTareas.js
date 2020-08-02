import React, { useContext } from 'react';
import Tarea from "./Tarea";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const ListadoTareas = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { tareasProyecto } = tareasContext;

    if (!proyecto) return <h2>Selecciona un Proyecto</h2>

    const [proyectoActual] = proyecto;

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : <TransitionGroup>
                        {tareasProyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={400}
                                classNames="tarea"
                            >
                                <Tarea
                                    tarea={tarea}
                                    key={tarea.id}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </>
    );
}

export default ListadoTareas;
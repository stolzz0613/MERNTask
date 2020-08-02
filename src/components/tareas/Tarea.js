import React, { useContext } from 'react';
import TareaContext from "../../context/tareas/TareaContext";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Tarea = ({ tarea }) => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyecto[0].id)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;
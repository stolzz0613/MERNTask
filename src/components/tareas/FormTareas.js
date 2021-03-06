import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const FormTareas = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;


    const tareasContext = useContext(TareaContext);
    const {
        limpiarTarea,
        actualizarTarea,
        tareaSeleccionada,
        errorTarea,
        agregarTarea,
        validarTarea,
        obtenerTareas
    } = tareasContext;

    useEffect(() => {
        if (tareaSeleccionada !== null) {
            setTarea(tareaSeleccionada)
        } else {
            setTarea({
                nombre: ""
            })
        }
    }, [tareaSeleccionada])

    const [tarea, setTarea] = useState({
        nombre: "",
    })

    if (!proyecto) return null;

    const [proyectoActual] = proyecto;

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if (tarea.nombre.trim() === "") {
            validarTarea();
            return;
        }

        if (tareaSeleccionada === null) {
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            actualizarTarea(tarea);
            limpiarTarea();
        }



        obtenerTareas(proyectoActual.id)

        setTarea({
            nombre: ""
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={tarea.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-submit btn-primario"
                        value={tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTareas;
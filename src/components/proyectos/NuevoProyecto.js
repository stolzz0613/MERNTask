import React, { useState, useContext } from 'react';
import ProyectoContext from "../../context/proyectos/ProyectoContext";


const NuevoProyecto = () => {

    const proyectosContext = useContext(ProyectoContext);
    const {
        formulario,
        errorFormulario,
        mostrarFormulario,
        agregarProyecto,
        mostrarError
    } = proyectosContext;

    const [proyecto, setProyecto] = useState({
        nombre: ""
    });

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();
        if (proyecto.nombre === "") {
            mostrarError();
            return;
        }

        agregarProyecto(proyecto);
        
        setProyecto({
            nombre: ""
        })
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >Nuevo Proyecto</button>

            {formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={proyecto.nombre}
                            onChange={onChangeProyecto}
                        />
                        <input
                            type="submit"
                            className="btn btn-block btn-primario"
                            value="Agregar Proyecto "
                        />
                    </form>
                ) : null}
            {errorFormulario
                ? <p className="mensaje error"> El nombre del Proyecto es obligatorio</p>
                : null
            }
        </>
    );
}

export default NuevoProyecto;
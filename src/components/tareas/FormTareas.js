import React, { useContext } from 'react';
import ProyectoContext from "../../context/proyectos/ProyectoContext";


const FormTareas = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    if (!proyecto) return null;
    
    const [proyectoActual] = proyecto;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-submit btn-primario"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTareas;
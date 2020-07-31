import React from 'react';


const FormTareas = () => {
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
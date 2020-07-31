import React from 'react';
import Tarea from "./Tarea";

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de Pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ];

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </>
    );
}

export default ListadoTareas;
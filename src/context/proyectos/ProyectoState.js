import React, { useReducer } from 'react';
import uuid from "react-uuid";
import proyectoContext from "./ProyectoContext";
import proyectoReducer from "./ProyectoReducer";
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
} from "../../types";




const ProyectoState = props => {
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio Web' },
        { id: 4, nombre: 'MERN' }
    ]
    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario: false
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyecto = proyecto => {
        proyecto.id = uuid()
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}
export default ProyectoState;
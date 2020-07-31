import React, { useReducer } from 'react';

import proyectoContext from "./ProyectoContext";
import proyectoReducer from "./ProyectoReducer";

const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}
export default ProyectoState;
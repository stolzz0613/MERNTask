import React, { useReducer } from 'react';
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyecto: 1 },
            { nombre: 'Elegir Colores', estado: false, proyecto: 1 },
            { nombre: 'Elegir Plataformas de Pago', estado: false, proyecto: 1 },
            { nombre: 'Elegir Hosting', estado: true, proyecto: 1 },
        ],
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;
import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'

const initialState = {
    logged: false
}


//La funcion de inicializacion busca si tenemos user en el localStorage y luego lo carga en user
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user, // => si el user existe
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [ authState, dispatch ] = useReducer( AuthReducer, initialState, init );

    const login = (name = '') => {

        const user = {
            id: 'ABC',
            name
        }

        const action = {
            type: types.login,
            payload: user
        };

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');

        const action = {
            type: types.logout
        };

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}

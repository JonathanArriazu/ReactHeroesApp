import { types } from "../types/types";

const initialState = {
    login: false
}


export const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state, // => hacemos esto por si existen mas propiedades en nuestro estado
                logged: true,
                user: action.payload
            }
        
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }

}
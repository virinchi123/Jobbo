import * as actionTypes from './actionTypes';

export const setEmail = email=>{
    return{
        type: actionTypes.setEmail,
        payload: email
    }
}

export const setPassword = password =>{
    return{
        type: actionTypes.setPassword,
        payload: password
    }
}
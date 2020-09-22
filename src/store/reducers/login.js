import * as actionTypes from '../actions/actionTypes';

const initialState={
    email:'',
    password: ''
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.setEmail:
            return {
                email:action.payload,
                password:state.password
            }
        case actionTypes.setPassword:
            return {
                email:state.email,
                password:action.payload
            }
        default:
            return state
    }
}

export default reducer;
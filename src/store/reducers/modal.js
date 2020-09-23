import * as actionTypes from '../actions/actionTypes';

const initialState = {
    institution:'',
    start:'',
    end:'',
    location:'',
    level:'',
    degree:'',
    board:'',
    percentage:'',
    profile:'',
    organization:'',
    description:'',
    link:'',
    title:'',
    skill:'',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setEdInstitution: 
            return {
                ...state,
                institution:action.payload
            }
        case actionTypes.setEdStart:
        case actionTypes.setProStart:
        case actionTypes.setJStart:
            return {
                ...state,
                start:action.payload
            }
        case actionTypes.setEdEnd:
        case actionTypes.setProEnd:
        case actionTypes.setJEnd:
            return {
                ...state,
                end: action.payload
            }
        case actionTypes.setProLocation:
            return{
                ...state,
                location:action.payload
            }
        case actionTypes.setEdLevel:
            return{
                ...state,
                level: action.payload
            }
        case actionTypes.setEdDegree:
            return {
                ...state,
                degree: action.payload
            }
        case actionTypes.setEdBoard:
            return {
                ...state,
                board: action.payload
            }
        case actionTypes.setEdPercentage:
            return {
                ...state,
                percentage: action.payload
            }
        case actionTypes.setProProfile:
            return {
                ...state,
                profile: action.payload
            }
        case actionTypes.setProOrganisation:
            return {
                ...state,
                organisation: action.payload
            }
        case actionTypes.setProDescription:
        case actionTypes.setJDescription:
            return {
                ...state,
                description: action.payload
            }
        case actionTypes.setJLink:
        case actionTypes.setLink:
            return{
                ...state,
                link:action.payload
            }
        case actionTypes.setJTitle:
            return {
                ...state,
                title: action.payload
            }
        case actionTypes.setSkill:
            return {
                ...state,
                skill: action.payload
            }
        default:
            return state
    }
}

export default reducer;
import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    name:'',
    email:'',
    phone:'',
    city:'',
    education:[],
    jobs:[],
    internships:[],
    projects:[],
    skills:[],
    links:[]
}

const reducer = (state = initialState, action) => {
    let index=0;
    switch (action.type) {
        case actionTypes.setName:
            return {
                ...state,
                name:action.payload
            }
        case actionTypes.setProfileEmail:
            return {
                ...state,
                email: action.payload
            }
        case actionTypes.setPhone:
            return {
                ...state,
                phone: action.payload
            }
        case actionTypes.setCity:
            return {
                ...state,
                city: action.payload
            }
        case actionTypes.addEducation:
            return {
                ...state,
                education:[...state.education,action.payload]
            }
        case actionTypes.removeEducation:
            let newEducations=[...state.education]
            index =newEducations.findIndex(el => _.isEqual(el, action.payload))
            newEducations.splice(index, 1);
            return {
                ...state,
                education:[...newEducations]
            }
        case actionTypes.addPrevJob:
            return {
                ...state,
                jobs:[state.jobs,action.payload]
            }
        case actionTypes.removePrevJob:
            let newJobs = [...state.jobs]
            index = newJobs.findIndex(el => _.isEqual(el, action.payload))
            newJobs.splice(index, 1);
            return {
                ...state,
                jobs:[...newJobs]
            }
        case actionTypes.addInternship:
            return {
                ...state,
                internships:[...state.internships,action.payload]
            }
        case actionTypes.removeInternship:
            let newInternships = [...state.internships]
            index = newInternships.findIndex(el => _.isEqual(el, action.payload))
            newInternships.splice(index, 1);
            return {
                ...state,
                internships:[...newInternships]
            }
        case actionTypes.addSkill:
            return {
                ...state,
                skills:[...state.skills,action.payload]
            }
        case actionTypes.removeSkill:
            let newSkills = [...state.skills]
            index = newSkills.findIndex(el => _.isEqual(el, action.payload))
            newSkills.splice(index, 1);
            return {
                ...state,
                skills:[...newSkills]
            }
        case actionTypes.addProject:
            return {
                ...state,
                projects:[...state.projects,action.payload]
            }
        case actionTypes.removeProject:
            let newProjects = [...state.projects]
            index = newProjects.findIndex(el => _.isEqual(el, action.payload))
            newProjects.splice(index, 1);
            return {
                ...state,
                projects:[...newProjects]
            }
        case actionTypes.addLink:
            return {
                ...state,
                links:[...state.links,action.payload]
            }
        case actionTypes.removeLink:
            let newLinks = [...state.education]
            index = newLinks.findIndex(el => _.isEqual(el, action.payload))
            newLinks.splice(index, 1);
            return {
                ...state,
                links:[...newLinks]
            }
        default:
            return state
    }
}

export default reducer;
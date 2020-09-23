import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    name:'Virinchi Rao',
    email:'raovirinchi123@gmail.com',
    phone:'8886086464',
    city:'Hyderabad',
    education:[{
        type:'secondary',
        institute:'Vagdevi Vilas School',
        board:'CBSE',
        end:2015,
        percentage:96
    },
    {
        type: 'senior secondary',
        institute:'Narayana Junior College',
        board: 'Telangana State Board',
        end: 2017,
        percentage: 93.4
    },
    {
        type: 'undergrad',
        institute:'Vellore Institute of Technology',
        degree:'B.Tech, Computer Science and Engineering',
        start:2017,
        end: 2021,
        percentage: 86.3
    }
],
    jobs:[{
        profile:'Rotational Developer',
        organisation:'ION Group',
        location:'Pune',
        start:2021,
        end: 2024,
        description:'Work is of a rotational developer.'
    }],
    internships:[{
        profile: 'Web Developer',
        organisation: 'Origin Cloud',
        location: 'Hyderabad',
        start: 2021,
        end: 2021,
        description: 'Work is of a web developer.'
    }],
    projects:[{
        title:'Braindle',
        start:2021,
        end:2021,
        description:'Kindle for the Blind',
        link:'https://www.github.com/virinchi123/Braindle'
    }],
    skills:['Java','Javascript','React','MongoDB','NodeJS','ExpressJS'],
    links:['https://www.github.com/virinchi123']
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
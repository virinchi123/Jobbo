import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash'

const initialState = {
    jobs: [
        {
            id:1,
            role:'Product Developer',
            company:'Mojave Ltd.',
            companyDescription:'We are from Mojave. You don\'t need to know anything else about us.',
            jobDescription:'You will work with peasants to till the soil using Machine Learning',
            location:'California',
            skills: ['tilling', 'Machine Learning', 'tilling', 'Machine Learning', 'tilling', 'Machine Learning', 'tilling', 'Machine Learning', 'tilling', 'Machine Learning', 'tilling', 'Machine Learning', 'tilling', 'Machine Learning', 'tilling', 'Machine Learning'],
            salary:25000,
            requirements:['Age: 19-25','Undergraduate','percentage>70%','proficient with Tilling','can perform backflips'],
            expanded:false
        },
        {
            id: 2,
            role: 'Software Engineer',
            company: 'Infosys',
            location: 'Bangalore',
            companyDescription: 'We are from Mojave. You don\'t need to know anything else about us.',
            jobDescription: 'You will work with peasants to till the soil using Machine Learning',
            requirements: ['Age: 19-25', 'Undergraduate', 'percentage>70%', 'proficient with Tilling', 'can perform backflips'],
            skills: ['tilling', 'Machine Learning'],
            salary: 25000,
            expanded: false
        }
    ]
};

const reducer = (state = initialState, action) => {
    const newJobs = [...state.jobs];
    switch (action.type) {
        case actionTypes.addJob:
            return {
                jobs:[...state.jobs,action.payload]
            }
        case actionTypes.removeJob:
            const index = el=>_.isEqual(el,action.payload)
            newJobs.splice(index,1);
            return {
                jobs:newJobs
            }
        case actionTypes.expandJob:
            const expandedIndex = newJobs.findIndex(el => _.isEqual(el, action.payload))
            console.log(expandedIndex)
            newJobs[expandedIndex]={...newJobs[expandedIndex],expanded:true}
            return {
                jobs: [...newJobs]
            }

        case actionTypes.contractJob:
            const contractedIndex = newJobs.findIndex(el => _.isEqual(el, action.payload))
            newJobs[contractedIndex] = { ...newJobs[contractedIndex], expanded: false }
            return {
                jobs: [...newJobs]
            }

        default:
            return state
    }
}

export default reducer;
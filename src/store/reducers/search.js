import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash'

const initialState = {
    jobs: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.addJob:
            return {
                jobs:[...state.jobs,action.payload]
            }
        case actionTypes.removeJob:
            const index = el=>_.isEqual(el,action.payload)
            const newJobs = [...state.jobs];
            newJobs.splice(index,1);
            return {
                jobs:newJobs
            }
        default:
            return state
    }
}

export default reducer;
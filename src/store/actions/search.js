import * as actionTypes from './actionTypes';

export const addJob = (job) => {
    return {
        type: actionTypes.addJob,
        payload: job
    }
}

export const removeJob = (job) => {
    return {
        type: actionTypes.removeJob,
        payload: job
    }
}
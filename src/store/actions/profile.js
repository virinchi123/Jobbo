import * as actionTypes from './actionTypes';

export const setName = name => {
    return {
        type: actionTypes.setName,
        payload: name
    }
}

export const setProfileEmail = email => {
    return {
        type: actionTypes.setProfileEmail,
        payload: email
    }
}

export const setPhone = phone => {
    return {
        type: actionTypes.setPhone,
        payload: phone
    }
}

export const setCity = city => {
    return {
        type: actionTypes.setCity,
        payload: city
    }
}

export const addEducation = education => {
    return {
        type: actionTypes.addEducation,
        payload: education
    }
}

export const removeEducation = education => {
    return {
        type: actionTypes.removeEducation,
        payload: education
    }
}

export const addPrevJob  = job => {
    return {
        type: actionTypes.addPrevJob,
        payload: job
    }
}

export const removePrevJob = job => {
    return {
        type: actionTypes.removePrevJob,
        payload: job
    }
}

export const addInternship = internship => {
    return {
        type: actionTypes.addInternship,
        payload: internship
    }
}

export const removeInternship = internship => {
    return {
        type: actionTypes.removeInternship,
        payload: internship
    }
}

export const addProject = project => {
    return {
        type: actionTypes.addProject,
        payload: project
    }
}

export const removeProject = project => {
    return {
        type: actionTypes.removeProject,
        payload: project
    }
}

export const addSkill = skill => {
    return {
        type: actionTypes.addSkill,
        payload: skill
    }
}

export const removeSkill = skill => {
    return {
        type: actionTypes.removeSkill,
        payload: skill
    }
}

export const addLink = link => {
    return {
        type: actionTypes.addLink,
        payload: link
    }
}

export const removeLink = link => {
    return {
        type: actionTypes.removeLink,
        payload: link
    }
}

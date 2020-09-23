import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showEducationModal: false,
    showJobModal: false,
    showInternshipModal: false,
    showProjectModal: false,
    showSkillModal: false,
    showLinkModal: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.showEducationModal:
            return {
                ...state,
                showEducationModal:true
            }
        case actionTypes.hideEducationModal:
            return {
                ...state,
                showEducationModal: false
            }
        case actionTypes.showJobModal:
            return {
                ...state,
                showJobModal: true
            }
        case actionTypes.hideJobModal:
            return {
                ...state,
                showJobModal: false
            }
        case actionTypes.showInternshipModal:
            return {
                ...state,
                showInternshipModal: true
            }
        case actionTypes.hideInternshipModal:
            return {
                ...state,
                showInternshipModal: false
            }
        case actionTypes.showProjectModal:
            return {
                ...state,
                showProjectModal: true
            }
        case actionTypes.hideProjectModal:
            return {
                ...state,
                showProjectModal: false
            }
        case actionTypes.showSkillModal:
            return {
                ...state,
                showSkillModal: true
            }
        case actionTypes.hideSkillModal:
            return {
                ...state,
                showSkillModal: false
            }
        case actionTypes.showLinkModal:
            return {
                ...state,
                showLinkModal: true
            }
        case actionTypes.hideLinkModal:
            return {
                ...state,
                showLinkModal: false
            }
        default:
            return state
    }
}

export default reducer;
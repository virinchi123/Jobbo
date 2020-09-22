import * as actionTypes from './actionTypes';

export const openDrawer = () => {
    return {
        type: actionTypes.openDrawer
    }
}

export const closeDrawer = () => {
    return {
        type: actionTypes.closeDrawer
    }
}
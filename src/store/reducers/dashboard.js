import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showDrawer: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.openDrawer:
            return {
                showDrawer: true
            }
        case actionTypes.closeDrawer:
            return {
                showDrawer: false
            }
        default:
            return state
    }
}

export default reducer;
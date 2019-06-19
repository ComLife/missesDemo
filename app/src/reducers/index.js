import { FetchType } from '../configs/actionTypes';
import { combineReducers } from 'redux';

const initState = {
    data: [],
    refreshing: false
};

const friendData = (state = initState, action) => {
    switch (action.type) {
        case FetchType.FETCH_SUBSCRIBE_LIST:
            return {
                ...state,
                data: action.data,
                refreshing: action.refreshing,
            };
        default:
            return state;
    }
}

export default combineReducers({
    friendData
})
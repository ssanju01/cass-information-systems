import { SHOW_LOADING, HIDE_NOTIFICATION, UPDATE_NOTIFICATION } from '../mutations';

const initialState = {
    spinner: 0,
    notification: null,
    showNotification: 0
};

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                spinner: action.payload ? state.spinner + 1 : state.spinner - 1
            };
        case HIDE_NOTIFICATION:
            return {
                ...state,
                showNotification: 0
            };
        case UPDATE_NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
                showNotification: state.showNotification + 1
            };
        default:
            return state;
    }
}
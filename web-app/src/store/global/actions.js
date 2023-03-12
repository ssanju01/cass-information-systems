import { HIDE_NOTIFICATION, UPDATE_NOTIFICATION, SHOW_LOADING } from '../mutations';

export function showNotification() {
    return function (dispatch) {
        dispatch({ type: HIDE_NOTIFICATION });
    }
};

export function updateNotification(payload) {
    return function (dispatch) {
        dispatch({ type: UPDATE_NOTIFICATION, payload: payload });
    }
};

export function updateSpinner(payload) {
    return function (dispatch) {
        dispatch({ type: SHOW_LOADING, payload: payload });
    }
};
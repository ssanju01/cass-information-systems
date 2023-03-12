import { SHOW_LOADING, UPDATE_SHIPPER, UPDATE_SHIPPER_DETAILS } from '../mutations';
import httpService from "../../network/http-service";
import { API_ENDPOINT } from '../api-action';

export function getShippers() {
    return async function (dispatch) {
        dispatch({ type: SHOW_LOADING, payload: true });
        try {
            const response = await httpService.get({ action: API_ENDPOINT.shipper });
            dispatch({ type: UPDATE_SHIPPER, payload: response.data.data });
        } catch (err) {
            if (err.statusCode === 409) throw err;
            //dispatch(handleError(DEFAULT_ACTION, err));
        } finally {
            dispatch({ type: SHOW_LOADING, payload: false });
        }
    };
}

export function getShipperById(id) {
    return async function (dispatch) {
        dispatch({ type: SHOW_LOADING, payload: true });
        try {
            const response = await httpService.get({ action: API_ENDPOINT.shipper, segment: id });
            dispatch({ type: UPDATE_SHIPPER_DETAILS, payload: response.data.data });
        } catch (err) {
            if (err.statusCode === 409) throw err;
            //dispatch(handleError(DEFAULT_ACTION, err));
        } finally {
            dispatch({ type: SHOW_LOADING, payload: false });
        }
    };
}
import { SHOW_LOADING, UPDATE_AUTHOR_QUOTES, UPDATE_RANDOM_QUOTES } from '../mutations';
import httpService from "../../network/http-service";
import { API_ENDPOINT } from '../api-action';

export function getRandomQuote() {
    return async function (dispatch) {
        dispatch({ type: SHOW_LOADING, payload: true });
        try {
            const response = await httpService.get({ action: API_ENDPOINT.quotesRandom });
            dispatch({ type: UPDATE_RANDOM_QUOTES, payload: response.data.data });
        } catch (err) {
            if (err.statusCode === 409) throw err;
            //dispatch(handleError(DEFAULT_ACTION, err));
        } finally {
            dispatch({ type: SHOW_LOADING, payload: false });
        }
    };
}

export function searchQuotes(query) {
    return async function (dispatch) {
        dispatch({ type: SHOW_LOADING, payload: true });
        try {
            const response = await httpService.get({ action: API_ENDPOINT.searchQuotes, segment: query });
            dispatch({ type: UPDATE_AUTHOR_QUOTES, payload: response.data.data.results });
        } catch (err) {
            if (err.statusCode === 409) throw err;
            //dispatch(handleError(DEFAULT_ACTION, err));
        } finally {
            dispatch({ type: SHOW_LOADING, payload: false });
        }
    };
}
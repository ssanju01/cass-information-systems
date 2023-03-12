import { UPDATE_RANDOM_QUOTES, UPDATE_AUTHOR_QUOTES } from '../mutations';

const initialState = {
    randomQuote: {},
    authorQuotes: []
};

export default function quotesReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_RANDOM_QUOTES:
            return {
                ...state,
                randomQuote: action.payload
            };
        case UPDATE_AUTHOR_QUOTES:
            return {
                ...state,
                authorQuotes: action.payload
            };
        default:
            return state;
    }
}
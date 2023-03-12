import { UPDATE_SHIPPER, UPDATE_SHIPPER_DETAILS } from '../mutations';

const initialState = {
    list: [],
    details: []
};

export default function shipperReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SHIPPER:
            return {
                ...state,
                list: action.payload
            };
        case UPDATE_SHIPPER_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        default:
            return state;
    }
}
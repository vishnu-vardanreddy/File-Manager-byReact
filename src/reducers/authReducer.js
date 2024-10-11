import { SIGN_IN, SIGN_OUT, AUTH_START, AUTH_ERROR } from "../redux/actionTypes/authActionTypes";

const initialState = {
    isAuthenticated: false, // Corrected from 'isAunthenticated' to 'isAuthenticated'
    user: {},
    loading: false, // Added to handle loading state
    error: null // Added to handle error state
};

const authReducer = (state = initialState, action) => {
    console.log("Reducer received action:", action);
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false,
                error: null
            };
        case SIGN_OUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                loading: false,
                error: null
            };
        case AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;

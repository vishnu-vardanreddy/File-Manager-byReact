import { SIGN_IN } from "../redux/actionTypes/authActionTypes";
import * as types from "../redux/actionTypes/authActionTypes";

const initialState = {
    isAunthenticated: false,
    user:{},
};
const authReducer = (state = initialState, action) => {
    switch (action.type)
    {
       case types.SIGN_IN:
        return {
            ...state,
            isAunthenticated:true,
            user:action.payload,
        };
        case types.SIGN_OUT:
            return{
                ...state,
                isAunthenticated:false,
                user:{},
            };
        default:
            return state;
    }
};

export default authReducer;

import { SIGN_IN } from "../redux/actionTypes/authActionTypes";
import * as types from "../redux/actionTypes/authActionTypes";

const initialState = {
    isAunthenticated: false,
    user:{},
};
const authReducer = (state = initialState, action) => {
    console.log("Reducer received action:", action);
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
        
            case types.AUTH_START:
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            case types.AUTH_ERROR:
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

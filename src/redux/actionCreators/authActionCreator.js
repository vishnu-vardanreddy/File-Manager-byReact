
import fire from "../../reducers/config/firebase"
import * as types from "../actionTypes/authActionTypes"

const loginUser = (payload) =>
{
    return {
        type :  types.LOGIN_USER,
        payload
    };
}
const logoutUser = ()=>
{
    return{
        type : types.SIGN_OUT_USER,

    }
}
export const signInUser = (email,password) => (dispatch) =>
{
    //console.log(email,password);
    fire.auth().signInWithEmailAndPassword(email,password).then(user=>{
        console.log(user);
    }).catch(error=>{
        alert("Invalid email or Password");
    })
};
export const signUpUser = (name,email,password)=>(dispatch)=>{
    console.log(name,email,password);
};
export const SignOutUser = ()=>(dispatch)=>{
    dispatch(logoutUser());
};


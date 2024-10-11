import fire from "../../reducers/config/firebase"
import * as types from "../actionTypes/authActionTypes"

const loginUser = (payload) => ({
    type: types.SIGN_IN,
    payload
});

const logoutUser = () => ({
    type: types.SIGN_OUT
});

const authStart = () => ({
    type: types.AUTH_START
});

const authError = (error) => ({
    type: types.AUTH_ERROR,
    payload: error
});

export const signInUser = (email, password) => (dispatch) => {
    dispatch(authStart());
    return fire.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            dispatch(loginUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
            }));
            //setSuccess(true);
            console.log("Login success");
            return { success: true, user };
        })
        .catch(error => {
            const errorMessage = error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' 
                ? "Invalid email or password"
                : error.message;
            dispatch(authError(errorMessage));
            console.log("Login failed");
            return { success: false, error: errorMessage };
        });
};

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
    dispatch(authStart());
    return fire.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            return userCredential.user.updateProfile({
                displayName: name
            });
        })
        .then(() => {
            const user = fire.auth().currentUser;
            dispatch(loginUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
            }));
            setSuccess(true);
            return { success: true, user };
        })
        .catch(error => {
            dispatch(authError(error.message));
            
            return { success: false, error: error.message };
        });
};

export const signOutUser = () => (dispatch) => {
    dispatch(authStart());
    return fire.auth().signOut()
        .then(() => {
            dispatch(logoutUser());
            return { success: true };
        })
        .catch(error => {
            dispatch(authError(error.message));
            return { success: false, error: error.message };
        });
};

export const checkIsLoggedIn = () => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        if(user){
            dispatch(
                loginUser({
                uid: user.uid,
                email : user.email,
                displayName: user.displayName,
            }));
        }
    });
};
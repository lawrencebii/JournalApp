import { SIGNUP, SIGNUP_FAILED, SIGNUP_SUCCESS } from "../constants";

const initialAppState ={
    isSigningUp:false,
    isLoggingIn:false,
    userDetails:{}
    
}

const AppReducer = (state=initialAppState,action: { type: any; }) =>{
    switch(action.type){
        case SIGNUP:
            return {...state,isSigningUp:true};
        case SIGNUP_SUCCESS:
            return {...state,isSigningUp:false}
        case SIGNUP_FAILED:
            return {...state,isSigningIn:false}
        default:
             return state;
    }
}

export default AppReducer;
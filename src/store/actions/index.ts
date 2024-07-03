import {Alert} from 'react-native';
import {SIGNIN,  SIGNIN_FAILED,  SIGNIN_SUCCESS,  SIGNUP_FAILED, SIGNUP_SUCCESS} from '../constants';
import { handleAPIResponse, httpRequest, storeDataStorage } from '../../common/utils/functions';

// create register userprops
type RegisterUserProps = {
  name: string;
  email: string;
  password: string;
  onSucess: () => void;
  onError: () => void;
};

// create register user function
export const registerUser = (details: RegisterUserProps) => {
  return (dispatch: (arg0: {type: string,payload?:any}) => void) => {
    dispatch({type: SIGNIN});
    const {name, email, password} = details;
    if (!name || name.trim().indexOf(' ') === -1) {
      Alert.alert('Name required', 'Please provide your full name');
      dispatch({type: SIGNUP_FAILED});
      return;
    }
    if (!email || email.trim().indexOf(' ') === -1) {
      Alert.alert('Email required', 'Please provide a valid email address');
      dispatch({type: SIGNUP_FAILED});
      return;
    }
    if (!password || password.length < 4) {
      Alert.alert('Invalid Password', 'Please provide a valid password');
      dispatch({
        type: SIGNUP_FAILED,
      });
      return;
    }
    httpRequest('api/sign-up','POST',{
        name,email,password,
    }).then(
(data:any)=>{
    const newData = handleAPIResponse(data);
if(newData){
    dispatch({type:SIGNUP_SUCCESS,payload:newData});
  details.onSucess();
}else{
    dispatch({type:SIGNUP_FAILED});
}

}
    ).catch((error:any) =>{
        dispatch({
            type:SIGNUP_FAILED,
        });
        console.log('REGISTER USER ERROR',error.message);
        Alert.alert(error.message);
    })
  };
};


export const loginUser =(email:string,password:string ,onSucess:()=>void, onError:()=>void)=>{
    return (dispatch: (arg0: {type: string,payload?:any}) => void) => {
        dispatch({type:SIGNIN});
        if (!email || email.trim().indexOf(' ') === -1) {
            Alert.alert('Email required', 'Please provide a valid email address');
            dispatch({type: SIGNIN_FAILED});
            
            return;
          }
          if (!password || password.length < 4) {
            Alert.alert('Invalid Password', 'Please provide a valid password');
            dispatch({
              type: SIGNIN_FAILED,
            });
           
            return;
          }
          httpRequest('api/sign-in','POST',{email,password}).then(
(data:any) =>{
    const newData = handleAPIResponse(data);
    if(newData){
        storeDataStorage('token',newData.accessToken).then(()=>{}).catch(()=>{});
        dispatch({type:SIGNIN_SUCCESS,payload:newData});
        onSucess();
    }else{
        dispatch({type:SIGNIN_FAILED,payload:data});
        onError();
    }
}
          ).catch((error:any)=>{
            dispatch({type:SIGNIN_FAILED});
            console.log("LOGIN FAILED",error);
            Alert.alert(error.message);
            onError();
          })
    }
}
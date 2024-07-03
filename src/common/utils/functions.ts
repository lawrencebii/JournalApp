/* eslint-disable eqeqeq */
import { Alert } from 'react-native';
import { BASE_URL } from './constants';
import _, {get} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getAuthHeader = (token: any)  =>{
    return {
Authorization: `Bearer ${token}`,
    };
};

const generateUrl = (endpoint:string) =>{
    const newBase  = _.includes([BASE_URL.substring(BASE_URL.length - 1)],'/') ? BASE_URL.substring(0,BASE_URL.length - 1) : BASE_URL;
    const url:string  = newBase + '/' + (_.includes(['/'],endpoint[0] ? endpoint.substring(1) : endpoint));

    return url;
};
export const getDataStorage = async (key: string) =>{
    try{
        const jsonVal = await AsyncStorage.getItem(key);
        return jsonVal != null || jsonVal != undefined
        ? JSON.parse(jsonVal) : null;
    }catch(e){
        console.log(e);
    }
};
export const removeValueFromStorage = async (key:string) =>
    {
        try{
            await AsyncStorage.removeItem(key);
        }catch(e){
            console.log(e);
        }
    };
export const storeDataStorage = async (key:string,value:any) =>{
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key,jsonValue);
    }catch(e){
        console.log(e);
    }
};

export const httpRequest = async (
    endpoint :string ,
    method :string ,
    body: Object ,
    headers?: { [key: string]: string }


)=>{
    try{
        const url = generateUrl(endpoint);
        let token = '';
        let authHeader = {};
        if(!_.includes(['sign-up','sign-in'],endpoint)){
            token = await getDataStorage('token');
        }
        if(token){
            authHeader = getAuthHeader(token);
        }
        const headersObj: { [key: string]: string } = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
            ...authHeader,
        };
        let reqConfig: RequestInit = {
            method: method ?? 'GET',
            headers: headersObj,
        };
    if(!_.includes(['get'],_.toLower(method)) && !_.isEmpty(body)){
        reqConfig.body = JSON.stringify(body);
    }
    const response = await fetch(url,reqConfig);
    const responseStatus = response.status;
    console.log(responseStatus);
    const responseJson = await response.json();
    console.log(responseJson);
    switch (responseStatus){
        case 200:
            return responseJson;
        case 201:
            return responseJson;
        case 400:
            throw new Error(responseJson.message);
        case 401:
            throw new Error(responseJson.message);
        case 500:
            throw get(
        responseJson,
        'message',
        'Something went wrong try again later',
            );
        default:
            responseJson;
    }




    }catch(e){
        console.log(e);
        Alert.alert('Request error', typeof e == 'string' ? e : JSON.stringify(e));

    }
};
export const handleAPIResponse = (data:any) =>{
    let message = '';
    if(!data){
        Alert.alert('Error', 'No data returned');
        return null;
    }
    else if(data.errors || data.exception || data.error){
        if(data.errors){
            for(const key in data.errors){
                message += ' --> ' + data.errors[key][0] + '\n'
            }
        }
        if(data.exception){
            message += ' --> ' + data.exception + '\n'
        }
        if(data.error){
            message += ' --> ' + data.error + '\n'
        }
        Alert.alert('Error', message);
        return null;

    }else{
        return data;
    }
}

const baseUrl = "https://allende-frontend.herokuapp.com/";
import { AsyncStorage } from "react-native"

export const logIn = (user)=>{
    return fetch(baseUrl + 'login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(r => r.json())
        .then(user =>{
            console.log("que es esot",user)
            saveUser(user)
            return user.user
        });
};
export const saveUser = (user)=>{
    AsyncStorage.setItem('token', user.access_token);
    AsyncStorage.setItem('user', JSON.stringify(user.user));
}
/*
export function logIn(auth){
    console.log(auth)
    return fetch(baseUrl + 'login',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(auth),
        //credentials:'include'
    })
        .then(res=>{
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(data=>{
            console.log(data);
            saveUser(data);
            return data.user;
        });
}

*/
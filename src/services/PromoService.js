import {AsyncStorage} from "react-native";

const baseUrl = "https://stark-fortress-68174.herokuapp.com";



export const getPromo = async () => {
    try {
        /*const userToken = await AsyncStorage.getItem('token');
        console.log(userToken)
        console.log("token", JSON.stringify(userToken))
        let Token =  JSON.stringify(userToken)*/
        return fetch(baseUrl + '/promos',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
                //"Authorization": "Token " + Token
            },
        })
            .then(r =>
                r.json()
            )
            .catch(promos => promos)

    } catch (error) {
        // Error retrieving data
        console.log("esto es un: ",error)
    }
}
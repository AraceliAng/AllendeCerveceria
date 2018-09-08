const apiUrl = "https://stark-fortress-68174.herokuapp.com";

export function getProducts(){
    return fetch(apiUrl + '/products',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json"

        },

    })
        .then(r => r.json())
        .catch(products => products)
}
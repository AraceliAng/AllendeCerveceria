const apiUrl = "https://stark-fortress-68174.herokuapp.com";

export function getProducts(){
    return fetch(apiUrl + '/products')
        .then(r => r.json())
        .catch(products => products)
}
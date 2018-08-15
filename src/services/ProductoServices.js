const apiUrl = "https://allende-frontend.herokuapp.com";

export function getProducts(){
    return fetch(apiUrl + '/products')
        .then(r => r.json())
        .catch(products => products)
}
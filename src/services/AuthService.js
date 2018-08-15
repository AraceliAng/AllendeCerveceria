const apiUrl = "https://allende-frontend.herokuapp.com";
export const logIn = (user)=>{
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(r => r.json())
        .then(user => user);
};
export const getUsers=()=>{
    const url = 'https://randomuser.me/api/0.8/?results=10'
    return fetch(url)
    .then((response)=>response.json())
}
export const getUsers=()=>{
    const url = "https://randomuser.me/api/?results"
    return fetch(url)
    .then((response)=>response.json())
}
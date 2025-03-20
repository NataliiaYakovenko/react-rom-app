export const getUsers=(count = 100, page = 1)=>{
    const url = `https://randomuser.me/api/?&results=${count}&seed=NYpage=${page}`
    console.log(url);
    return fetch(url)
    .then((response)=>response.json())
}
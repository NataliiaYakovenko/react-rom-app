// В компоненті UserCard потрібно реалізувати логіку відмалювання одного
//єдиного користувача 
//Цей єдиний користувач спускається в компоненту UserCard через пропси
//від батьківської компоненти UserList
import './style.css'
import React from "react"

function UserCard({user}){
  
    const {name:{first: firstName,last: lastName}, email, picture:{large:imgSrc}}  = user

    return(
        <article className='card-wrapper'>
            <img src={imgSrc} alt={`${firstName} ${lastName}`} className='user-img' />
            <h3>{firstName} {lastName}</h3>
            <p>{email}</p>
        </article>
    )
}

export default UserCard
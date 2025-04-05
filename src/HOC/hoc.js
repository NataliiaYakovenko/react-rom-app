import { ThemeContext } from "../components/context/ThemeContext";
import {UserContext} from '../components/context/UserContext'

// Компонент вищого порядку (Hight Order Component)- це функція, яка приймає компонент в якочті аргумента
// і повертає новий компонент
export const WithTheme = (Component) => (props) => {
    return <ThemeContext.Consumer>
      {({theme,setTheme})=>{
         return <Component theme={theme} setTheme={setTheme} {...props}/>
      }}
    </ThemeContext.Consumer>;
  };

 export const WithUser = (Component) =>(props)=>{
    return <UserContext.Consumer>
      {({user,logOut})=>{
             return <Component user={user} logOut={logOut} {...props}/>
      }}
    </UserContext.Consumer>
  }
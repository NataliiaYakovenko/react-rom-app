import React from "react";
import InnerChild from "./InnerChild/InnerChild";
import { useContext } from "react";
import styles from './Child.module.css'
import { UserContext } from "../../../../context/UserContext";


const Child = (props) => {
  const {user:{firstName,lastName,avatar}} = useContext(UserContext)
  
  return (<div> 
    Child
    <p>
      {firstName} {lastName}
    </p>
    <img src= {avatar} alt='This is avatar' className={styles.avatar}/>

    <InnerChild />
  </div>);
};

export default Child;

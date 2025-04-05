import React from "react";
import InnerChild from "./InnerChild/InnerChild";
import { WithUser } from "../../../../../HOC/hoc";
import styles from './Child.module.css'


const Child = (props) => {
  
  return (<div>
    Child
    <p>
      {props.user.firstName} {props.user.lastName}
    </p>
    <img src= {props.user.avatar} alt='This is avatar' className={styles.avatar}/>

    <InnerChild />
  </div>);
};

export default WithUser(Child);

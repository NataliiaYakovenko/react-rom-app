import React from "react";
import InnerChild from "./InnerChild/InnerChild";
import { UserContext } from "../../../../context/UserContext";
import styles from './Child.module.css'


const Child = (props) => {
  
  return (
    <UserContext.Consumer>
      {({ user }) => {
       return (<div>
          Child
          <p>
            {user.firstName} {user.lastName}
          </p>
          <img src= {user.avatar} alt='This is avatar' className={styles.avatar}/>
   
          <InnerChild />
        </div>);
      }}
    </UserContext.Consumer>
  );
};

export default Child;

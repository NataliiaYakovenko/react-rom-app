import React, { Component } from "react";
import SIGN_UP_SHEMA from "../../schemas";
import { Formik, Form, Field } from "formik";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function FormSignUp(props) {
 const handlerSubmitToFormik = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={handlerSubmitToFormik}>
      {(formikProps) => {
        return (
          <Form>
            <Field type="text" name="firstName" placeholder='Your first name'/>
            <Field type="text" name="lastName" placeholder='Your last name'/>
            <Field type="text" name="email" placeholder='Your email'/>
            <Field type="text" name="password" placeholder='Your password'/>

            <button type="submit">Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormSignUp;

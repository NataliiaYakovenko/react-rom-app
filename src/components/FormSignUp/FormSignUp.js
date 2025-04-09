import React, { Component } from "react";
import SIGN_UP_SHEMA from "../../schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
    <Formik initialValues={initialState} 
    onSubmit={handlerSubmitToFormik}
    validationSchema={SIGN_UP_SHEMA}
    >
      {(formikProps) => {
        return (
          <Form style={{display:"flex", flexDirection: "column"}}>
            <Field type="text" name="firstName" placeholder='Your first name'/>
            <ErrorMessage name="firstName" component='p'/>
            <Field type="text" name="lastName" placeholder='Your last name'/>
            <ErrorMessage name="lastName" component='p'/>
            <Field type="text" name="email" placeholder='Your email'/>
            <ErrorMessage name="email" component='p'/>
            <Field type="text" name="password" placeholder='Your password'/>
            <ErrorMessage name="password" component='p'/>

            <button type="submit">Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormSignUp;

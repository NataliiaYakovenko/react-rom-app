import React, { Component } from "react";
import SIGN_IN_SHEMA from "../../schemas/indexSignInSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialState = {
  email: "",
  password: "",
};

function FormSignIn(props) {
  const handlerSubmitToFormik = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handlerSubmitToFormik}
      validationSchema={SIGN_IN_SHEMA}
    >
      {(formikProps) => {
        return (
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <Field type="text" name="email" placeholder="Your email" />
            <ErrorMessage name="email" component="p" />
            <Field type="text" name="password" placeholder="Your password" />
            <ErrorMessage name="password" component="p" />
            <button>Sign In</button>
          </Form>
        );
      }}

    </Formik>
  );
}

export default FormSignIn;

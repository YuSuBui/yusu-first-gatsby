import React from 'react'
import * as Yup from "yup"
import { withFormik } from "formik"
import FormControl from './forms/formControl'
import "../styles/sign-in.scss"

const MySignInForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        id="username"
        type="text"
        label="Username"
        placeholder="Enter your username"
        error={touched.username && errors.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormControl
        id="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        error={touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username is longer than")
      .required("Username is required."),
    password: Yup.string()
      .min(8, "Invalid password")
      .required("Password is required!")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    // fetch("/?no-cache=1", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: encode({ "form-name": "driversubmit", payload })
    // });
    console.log(payload)
  },
  displayName: "MySignInForm"
});

const SignInForm = formikEnhancer(MySignInForm);

const SignIn = () => {
  return (
    <>
      <div className='container'>
        <div className='sign-in-container'>
          <h1>Sign in</h1>
          <SignInForm></SignInForm>
        </div>
      </div>
    </>
  )
}

export default SignIn
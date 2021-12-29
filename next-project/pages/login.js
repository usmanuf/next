import React, { useState, useEffect } from "react";
import AppForm from "./AppForm";
import { Field, Form } from "formik";
import { URL_API } from "../variables";

import axios from "axios";
import Router from "next/router";

import styles from "../components/Blog/Blog-Form/blogForm.module.css";

let initialValues = {
  name: "",
  password: "",
};

function Login() {
  const [error, setError] = useState();
  const [token, settoken] = useState();
  const [user, setUser] = useState();

  const onSubmit = async function (values) {
    const object = {
      email: values.formValues.name,
      password: values.formValues.password,
    };
    // try {
    const data = await axios.post(URL_API + "auth/customer/login", object);
    if (data.data.status == 200) {
      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.data.access_token);
        Router.push("/blogForm");
    }
    // } catch {}
    //  axios
    //          .post(URL_API + "auth/customer/login", object)
    //          .then((response) => {

    //              console.log("response",response);
    //              setLoading(false);
    //              // history.push("/thank-you");

    //          })
    //          .catch((error) => {
    //              console.log(error.response.data.errors);
    //         // setError(error.response.data.errors)
    //          });
  };

  return (
    <>
      <div>
        <AppForm initialValues={initialValues} handleSubmit={onSubmit}>
          <div className={styles.wrapper}>
            <div className={styles.formsignin}>
              <h2 className={`${styles.formsignin}-heading`}>Please login</h2>
              <Field
                type="text"
                className="form-control"
                name="name"
                placeholder="Email Address"
                required=""
                autofocus=""
              />
              <Field
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required=""
              />
              <label classNames="checkbox">
                <Field
                  type="checkbox"
                  value="remember-me"
                  id="rememberMe"
                  name="rememberMe"
                />{" "}
                Remember me
              </label>
              <button className="btn btn-md btn-primary " type="submit">
                Login
              </button>
              {/* {error?.email.map((error,index)=>( <p style={{color:"red"}} >{error}</p>))}
              {error?.password.map((error,index)=>( <p style={{color:"red"}} >{error}</p>))} */}
            </div>
          </div>
        </AppForm>
      </div>
    </>
  );
}

export default Login;

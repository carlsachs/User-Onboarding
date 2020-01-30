import React, { useState } from "react";
import {withFormik, Form, Field} from "formik";

const UserForm = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    setUser({ name: "", email: "", password: ""});
  };

  return (
    <div>
      <Form>
        <label>
          Name:
          <Field
            type="textarea"
            name="name"
            placeholder="Name..."
          />
        </label>
        <label>
          Email:
          <Field
            type="email"
            name="email"
            placeholder="Email..."
          />
        </label>
        <label>
          Password:
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <label>
          By Checking You Agree to TOS:
          <input
            type="radio"
            // password="password"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password}){
        return {
            name: name || "",
            email: email || "",
            password: password || ""
        }
    }
})(
    UserForm
    );

export default FormikUserForm;

import React, { useState } from "react";
import {withFormik} from "formik";

const UserForm = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
  };

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            email="email"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            password="password"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          By Checking You Agree to TOS:
          <input
            type="checkbox"
            // password="password"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

const FormikUserForm = withFormik({
    mapPropsToValues(props){
        return {
            name: props.name
        }
    }
})(
    UserForm
    );

export default FormikUserForm;

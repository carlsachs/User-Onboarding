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
        <label htmlFor="name">
          Name:
          <Field
            id="name"
            type="textarea"
            name="name"
            placeholder="Name..."
          />
        </label>
        <label htmlFor="email">
          Email:
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Email..."
          />
        </label>
        <label htmlFor="password">
          Password:
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <label htmlFor="tos"> Do you Accept the Terms of Service?   
        <Field name="tos" type="checkbox" placeholder="Accept Terms?">
        </Field>
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

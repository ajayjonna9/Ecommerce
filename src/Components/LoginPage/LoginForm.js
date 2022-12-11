import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import Contex from "../Store/Contex";

import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../ContactUs/contactpage.css";

const LoginForm = () => {
  const password = useRef("");
  const history = useNavigate();
  const contexVal = useContext(Contex);
  const [newUser, setNewUser] = useState(false);
  const email = useRef("");
  const onclickingUser = () => {
    setNewUser(!newUser);
  };
  const onsubmiting = (e) => {
    e.preventDefault();
    async function loginUser() {
      try {
        const obj = {
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        };
        const head = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        let url;
        if (newUser) {
          url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCr7VTuCly3QdZ9kdyc7BpVz6ZBjJvoHS8";
        } else {
          url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCr7VTuCly3QdZ9kdyc7BpVz6ZBjJvoHS8";
        }

        const res = await axios.post(url, obj, head);
        console.log(res);
        contexVal.login(res.data.idToken, res.data.email);
        const crudres = await axios.get(
          `https://crudcrud.com/api/3dd42d67e3104dc68e4bd82bfc23b370/cart${contexVal.mail}`
        );
        contexVal.addcruditems(crudres.data);
        console.log("crud", crudres.data);
        history("/");
      } catch (err) {
        console.log(err);
        alert("Authentication failed");
      }
    }
    loginUser();
  };
  return (
    <div className="contactpage">
      <div className="d-flex flex-column align-items-center p-5">
        <h4 className="mb-5">
          {newUser && "Sign Up"}
          {!newUser && "Login"}
        </h4>
        <Form onSubmit={onsubmiting} className="form">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            ref={email}
            required
          />

          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            ref={password}
            required
          />

          <Button variant="primary" type="submit">
            {newUser ? "Sign Up" : "Login"}
          </Button>
          <button
            type="button"
            onClick={onclickingUser}
            className="togglebutton"
          >
            {newUser ? "Already have account? Login" : "New User?Sign Up"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useCallback, useContext, useRef, useState } from "react";
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
  const onsubmiting = useCallback(
    (e) => {
      e.preventDefault();
      console.log("login");
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

          const RegEx = /^[a-z0-9]+$/i;
          let newMail = "";
          for (let i = 0; i < res.data.email.length; i++) {
            if (RegEx.test(res.data.email[i])) {
              newMail = newMail + res.data.email[i];
            }
          }
          const crudres = await axios.get(
            `https://crudcrud.com/api/9cb60ec3cba0469db220fba3e285c813/cart${newMail}`
          );
          contexVal.login(res.data.idToken, newMail);
          contexVal.addcruditems(crudres.data);
          console.log(crudres);
          console.log("mail", newMail);
          console.log("crud", crudres.data);
          history("/");
        } catch (err) {
          console.log(err);
          alert("Authentication failed");
        }
      }
      loginUser();
    },
    [contexVal.login, password, email]
  );
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

import React, { useContext, useRef } from "react";
import axios from "axios";
import Contex from "../Store/Contex";

import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  const password = useRef("");
  const history = useNavigate();
  const contexVal = useContext(Contex);
  const email = useRef("");
  const onsubmit = async (e) => {
    e.preventDefault();
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

      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCr7VTuCly3QdZ9kdyc7BpVz6ZBjJvoHS8",
        obj,
        head
      );
      console.log(res);
      contexVal.login(res.data.idToken);
      history("/");
    } catch (err) {
      console.log(err);
      alert("Authentication failed");
    }
  };
  return (
    <div className="contactpage">
      <Form onSubmit={onsubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" ref={email} />

        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter email"
          ref={password}
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;

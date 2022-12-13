import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contactpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {
  const navigator = useNavigate();
  const name = useRef("");
  const email = useRef("");
  const phno = useRef("");
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        name: name.current.value,
        email: email.current.value,
        phoneNo: phno.current.value,
      };
      console.log(obj);

      const res = await axios.post(
        "https://contactusform-d1104-default-rtdb.firebaseio.com/contact_info.json",
        obj
      );
      console.log(res);
      alert("We Will Contact Soon");
    } catch (err) {
      console.log(err);
      alert("Somthing went wrong");
    }
    navigator("/");
  };
  return (
    <div className="contactpage">
      <div className="d-flex flex-column align-items-center p-5">
        <h2 className="mb-5">Contact Us</h2>
        <Form onSubmit={onsubmit} className="form">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={name}
            required
          />

          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={email}
            required
          />

          <Form.Label>PhoneNo</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter PhoneNo"
            pattern="[0-9]{10}"
            ref={phno}
            required
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUsPage;

import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contactpage.css";
import axios from "axios";

const ContactUsPage = () => {
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="contactpage">
      <Form onSubmit={onsubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={name} />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />

        <Form.Label>PhoneNo</Form.Label>
        <Form.Control type="tel" placeholder="Enter PhoneNo" ref={phno} />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUsPage;

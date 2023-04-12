import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', form); // <-- Log the form data
    try {
      const res = await axios.post('/contact/', form);
      console.log(res.data);
      // ...
    } catch (err) {
      console.log(err);
      // ...
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={form.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="reason">
        <Form.Label>Reason for Contacting</Form.Label>
        <Form.Control as="select" name="reason" value={form.reason} onChange={handleChange}>
          <option value="">-- Select a Reason --</option>
          <option value="LOGIN">Login Issue</option>
          <option value="REPORT_POST">Report a Post</option>
          <option value="GENERAL">General Inquiry</option>
          <option value="DELETE_ACCOUNT">Delete Account</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" value={form.message} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;

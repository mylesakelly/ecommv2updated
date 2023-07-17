import '../css/contact.css';
import React, { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform your submit logic here
      console.log('Form submitted:', formValues);
    }
  };

  const validateForm = () => {
    // Perform your validation logic here
    // Example: Check if all fields are filled
    const { firstname, lastname, email, subject } = formValues;
    if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '' || subject.trim() === '') {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  };

  return (
    <div>
      <section className="contact-header">
        <h2>Contact Us Below!</h2>
      </section>

      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter your first name.." value={formValues.firstname} onChange={handleInputChange} required />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter your last name.." value={formValues.lastname} onChange={handleInputChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email.." value={formValues.email} onChange={handleInputChange} required />

          <label htmlFor="subject">Leave us a Message!</label>
          <textarea id="subject" name="subject" placeholder="Write your message here.." style={{ height: '200px' }} value={formValues.subject} onChange={handleInputChange} required></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

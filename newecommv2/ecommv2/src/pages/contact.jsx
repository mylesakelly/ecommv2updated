import '../css/contact.css';
import React, { useState } from 'react';

// creating a functional component named contact and using the useState hook to declare a state Variable called formValues
// setFormValues is used to update that initial state
// the initial state has each field set to empty strings
const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: ''
  });

  // creating a handleInputChange function that takes an event as an argument
  // destructuring assignment is used to extract the name and value properties

  // this code captures the changes made in an input field by the user. It extracts the name and value of the input field from the event, 
  //and then updates the formValues state by creating a new object that 
  //copies the previous state and replaces the value of the specific field that changed.

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  // this code handles the submit and if the form has the valid information the user is able to submit their information
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform your submit logic here
      console.log('Form submitted:', formValues);
    }
  };

  // handles the validation logic
  // if the user does not enter information into the fields they will receive an alert stating to fill out the information
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

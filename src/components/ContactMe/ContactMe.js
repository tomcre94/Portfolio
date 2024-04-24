import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7z4i375',
        'template_dbonqdx',
        e.target,
        'fmeZAfiwIajVsDdKw'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form id='contactme' onSubmit={sendEmail}>
      <div class='form-group'>
        <label for='from_name'>Your Name</label>
        <input
          type='text'
          id='from_name'
          name='from_name'
          placeholder='Enter your name'
          required
        />
      </div>
      <div class='form-group'>
        <label for='reply_to'>Your Email</label>
        <input
          type='email'
          id='reply_to'
          name='reply_to'
          placeholder='Enter your email'
          required
        />
      </div>
      <div class='form-group'>
        <label for='subject'>Subject</label>
        <input
          type='text'
          id='subject'
          name='subject'
          placeholder='Enter subject'
          required
        />
      </div>
      <div class='form-group'>
        <label for='message'>Your Message</label>
        <textarea
          id='message'
          name='message'
          placeholder='Enter your message'
          required
        ></textarea>
      </div>
      <button type='submit'>Send</button>
    </form>
  );
}

export default ContactForm;

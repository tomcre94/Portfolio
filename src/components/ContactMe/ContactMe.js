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
      <input type='hidden' name='to_name' value='Destinataire' />
      <input type='text' name='from_name' placeholder='Your Name' />
      <input type='email' name='reply_to' placeholder='Your Email' />
      <input type='text' name='subject' placeholder='Subject' />
      <textarea name='message' placeholder='Your Message'></textarea>
      <button type='submit'>Send</button>
    </form>
  );
}

export default ContactForm;

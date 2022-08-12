import React from 'react'
import './Contact.css';

export default function Contact() {
  const width = '600px';
  const height = '450px';
  
  function contact(e) {
    e.preventDefault();
    alert('Your mail sent successfully!');
  }
  return (
    <div className='contact-container'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5928.079082813542!2d43.47624782411293!3d42.020884137325496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40434dc2315eb775%3A0x602c05a76eb1044a!2z4YOk4YOd4YOc4YOQ!5e0!3m2!1ska!2sge!4v1659868728294!5m2!1ska!2sge" style={{border:0, width:width, height:height}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <form id="form" style={{display: 'flex', flexDirection:'column'}}>
        <input type="email" name="email" placeholder="Email Address"/>
        <textarea name="contact" placeholder="Contact us" style={{margin: '20px 0'}}/>
        <button form="form" onClick={(e) => contact(e)}>Submit</button>
      </form>
    </div>
  )
}

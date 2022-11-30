import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    const id = toast.loading("Sending message...")
    emailjs.sendForm('service_41zq09f', 'template_drsfl93', form.current, 'zPlu88YwJij6y5QnT')
    .then(() => {
      toast.update(id, { render: "Message sent", type: "success", isLoading: false, autoClose: 5000, });
      e.target.reset()
    })
    .catch((e)=>{
      toast.update(id, { render: "Error to sent message", type: "error", isLoading: false, autoClose: 5000, });
      console.log(e);
    })
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:libertomed@gmail.com" target="_blank" className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>libertomed@gmail.com</h5>
            <a>Send a message</a>
          </a>
          <a href="https://api.whatsapp.com/send?phone=34649936289" target="_blank" className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+34 ...33</h5>
            <a>Send a message</a>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder="Your Message" required></textarea>

<div class="form__footer">
<button type="submit" className="btn btn-primary">Send Message</button>

</div>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact
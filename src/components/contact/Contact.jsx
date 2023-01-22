import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({t}) => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    const id = toast.loading("Sending message...")
    emailjs.sendForm('service_6fd7voe', 'template_ci6rnog', form.current, 'cJAEDucCpkp4t3bvQ')
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
      <h5>{t('contact.subtitle')}</h5>
      <h2>{t('contact.title')}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:libertomed@gmail.com" target="_blank" rel="noreferrer" className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>libertomed@gmail.com</h5>
            <a href="mailto:libertomed@gmail.com">{t('contact.send-message')}</a>
          </a>
          <a href="https://api.whatsapp.com/send?phone=34649936289" target="_blank" rel="noreferrer" className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+34 ...33</h5>
            <a href="https://api.whatsapp.com/send?phone=34649936289">{t('contact.send-message')}</a>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('contact.name')} required/>
          <input type="email" name='email' placeholder={t('contact.email')} required />
          <textarea name="message" rows="10" placeholder={t('contact.message')} required></textarea>

<div className="form__footer">
<button type="submit" className="btn btn-primary">{t('contact.send')}</button>

</div>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact
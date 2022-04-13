import React from 'react';
import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wr1yrb6', 'template_yen8edm', form.current, 'E5jFutJqUZ94c8ryO' );

        e.target.reset();
    };

    return (
        <section id="Contact" className="cream-section">
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='from_name' id='from_name' placeholder='Your Full Name' required />
                    <input type="email" name='from_email' id='from_email' placeholder='Your Email' required />
                    <textarea name="message" id='message' placeholder='Your Message' rows="7" required />
                    <button type="submit" className="btn submit-button" required>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
import React from 'react';
import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', );

        // e.target.reset();
    };

    return (
        <section id="Contact" className="cream-section">
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <form>
                    <input type="text" name='name' placeholder='Your Full Name'></input>
                    <input type="email" name='email' placeholder='Your Email'></input>
                    <textarea type="message" placeholder='Your Message' rows="7"></textarea>
                    <button type="submit" className="btn submit-button">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
        <section id="Contact">
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
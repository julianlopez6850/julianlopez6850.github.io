import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_57trngd', 'template_ng3zzjf', form.current, 'hxRFoH9Rffcch7ieB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact" id="contact">
            <div className = "header">
                Contact <strong>Me</strong>
            </div>
            <div className = "content">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="contact-form">
                        <div className = "left">
                            <input type="text" placeholder="Name *" name="user_name" required />
                            <input type="email" placeholder="Email *" name="user_email" required />
                            <input type="text" placeholder="Subject" name="user_subject" />
                        </div>
                        <div className = "right">
                            <textarea placeholder="Message *" name="message" required />
                        </div>
                    </div>
                    <div className="send-button">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

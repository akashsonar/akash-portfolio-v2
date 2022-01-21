import React, {useContext, useRef, useState} from 'react';
import "./contact.scss";
import emailjs from '@emailjs/browser';
import {ThemeContext} from '../../context';

export default function Contact() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [Done,
        setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_jp3qalb", "template_ejl4p1f", formRef.current, "user_wjlN47iOn8WmDdAZmL1rB")
            .then((result) => {
                setDone(true);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="/assets/phone.png" alt="" className="c-icon"/>
                            +91 9604610267
                        </div>
                        <div className="c-info-item">
                            <img src="/assets/email.png" alt="" className="c-icon"/>
                            sonarakash888@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src="/assets/address.png" alt="" className="c-icon"/>
                            Nashik, Maharashtra, India.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?
                        </b>
                        <p>Get in touch. Always available for freelancing if the right project comes
                            along me.</p>
                    </p>
                    <form action="" ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{
                            backgroundColor: darkMode && "#333"
                        }}
                            type="text"
                            placeholder="Full Name"
                            name="user_name"/>
                        <input
                            style={{
                            backgroundColor: darkMode && "#333"
                        }}
                            type="text"
                            placeholder="Subject"
                            name="user_subject"/>
                        <input
                            style={{
                            backgroundColor: darkMode && "#333"
                        }}
                            type="text"
                            placeholder="Enter your email address"
                            name="user_email"/>
                        <textarea
                            style={{
                            backgroundColor: darkMode && "#333"
                        }}
                            name="message"
                            placeholder="Message"
                            id=""
                            rows="5"></textarea>
                        <button>Submit</button>
                        <p>{Done && "Message sent successfully!! I will contact you ASAP."}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
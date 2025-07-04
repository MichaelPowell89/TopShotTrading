"use client";

import React, { useState } from "react";
import Image from "next/image";
import css from "./Contact.module.css";
import Logo from "@/assets/logo";
// import logoImg from "@/assets/logo.png"

export default function Contact(params) {
  const enquiry = params.subject
    ? `${params.subject.owner} - ${params.subject.make} - ${params.subject.model}`
    : "";

  const [contactForm, setContactForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [contact, setContact] = useState({
    user_name: "",
    user_email: "",
    user_number: "",
    subject: enquiry ? enquiry : "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageSent(true);

    const formData = {
      user_name: contact.user_name,
      user_email: contact.user_email,
      user_number: contact.user_number,
      subject: contact.subject,
      message: contact.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setContactForm(true);
        setError(null);
        setContact({
          user_name: "",
          user_email: "",
          user_number: "",
          subject: "",
          message: "",
        });
      } else {
        setError(result.error || "Failed to send message");
      }
    } catch (error) {
      setError(err.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      <main className={css.main}>
        <div className={css.contactFormContainer}>
          <div className={css.contactGrid}>
            {/* Left column: the form */}
            {!messageSent && (
              <form method="post" onSubmit={handleSubmit} className={css.form}>
                <div className={css.gridColumn} style={{ paddingRight: '1em', borderRight: "solid 0.25px", gridRowStart: '1', gridRowEnd: '3', paddingRight: '3em', paddingBottom: '1em'}}>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="user_name" // <-- match state key here
                    placeholder="Name"
                    value={contact.user_name}
                    className={css.field}
                  />

                  <input
                    onChange={handleChange}
                    type="email"
                    name="user_email" // <-- match state key here
                    placeholder="Email"
                    value={contact.user_email}
                    className={css.field}
                  />

                  <input
                    onChange={handleChange}
                    type="tel"
                    name="user_number" // <-- match state key here
                    placeholder="Phone Number"
                    value={contact.user_number}
                    className={css.field}
                  />

                  <input
                    onChange={handleChange}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={contact.subject}
                    className={css.field}
                  />
                  <div></div>
                </div>
                {/* <div className={css.infoPanel}>
                  <Logo height={"300px"} width={"300px"} />
                  <h3>Top Shot Trading</h3>
                  <p>Thinking of buying or selling</p>
                  <p>Get in touch today!</p>
                </div> */}
                <div className={css.gridColumn} style={{paddingLeft: '2em'}}>
                  <textarea
                    onChange={handleChange}
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={contact.message}
                    className={css.field}
                    style={{ height: "100%"}}
                  />
                </div>
                <button
                  type="submit"
                  disabled={
                    !contact.user_name ||
                    !contact.user_email ||
                    !contact.user_number ||
                    !contact.subject ||
                    !contact.message
                  }
                  style={{ gridColumnStart: '2', marginLeft: '2em' }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

import React from "react";
import Swal from "sweetalert2";
import { MdConnectWithoutContact } from "react-icons/md";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5edf734f-ff76-4433-aab4-29413a0c459e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "I will get back to you soon!",
        icon: "success",
      });
    }
  };

  return (
    <section id="contact" className="m-4">
      <div className="container border rounded">
        <div className="mt-2">
          <MdConnectWithoutContact className="my-3 fs-1 border p-2 rounded bg-body-tertiary" />
        </div>
        <form onSubmit={onSubmit}>
          <h2 className="text-center p-3">Get In Touch</h2>
          <p className="text-center pb-3">Let's have interesting talk about Carrier Building.</p>
          <hr />
          <div className="d-flex flex-column p-4">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="d-flex flex-column p-4">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="d-flex flex-column p-4">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button
              type="submit" className="shadow-inner-hover"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

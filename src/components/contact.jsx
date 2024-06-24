import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

export const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_s25e5sr",
        "template_j2z3rdc",
        e.target,
        "FBGg31ylhlAGWAcPS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("Thank you for your message! I will be in touch.");

          console.log(
            "EMAIL SUCCESSFULLY SENT, then completed",
            name,
            "<<<name",
            email,
            "email <<<<",
            message,
            "message<<<<<<<<<<<"
          );
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Please fill out the form below to send Bobby an email.</p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className={`btn btn-custom btn-lg ${
                    loading ? "btn-loading" : success ? "btn-success" : ""
                  }`}
                  disabled={loading || success}
                >
                  {loading
                    ? "In Progress"
                    : success
                    ? "Thank you for your response"
                    : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Location
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>

            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/bobbystomski/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Stomski">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>Thank you for visiting. &copy; Stomski Web Development 2024</p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../layout/Layout";
import styles from "./index.module.scss";
import { Button } from "../../components/Button/Button";
import { FaPhone } from "react-icons/fa";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";

const options = [
  { value: "g", label: "General Question" },
  { value: "ss", label: "Service and Support" },
  { value: "s", label: "Spare Parts" },
  { value: "m", label: "Marketing" }
];

const defaultOption = options[0];

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false, submitted: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => this.setState({ submitted: true }))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <div className={styles.inner}>
              <h2>Contact Us</h2>
              <p className={styles.callUs}>
                Call us NOW to find out more on&nbsp;
                <a href="tel:09-818-6606">
                  <FaPhone className="flipImage" />
                  09-818-6606.
                </a>
              </p>
              <br />
              <p>
                If you can’t call now, complete as much information below as you
                can and we’ll be in touch with you to talk through your
                requirements. Your enquiry will be answered within 2 business
                days by a representative of Snug Insulation Limited.
              </p>
            </div>
          </div>
          <div className={styles.form}>
            {!this.state.submitted ? (
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className={styles.field}>
                  <label htmlFor={"name"}>Name</label>
                  <input
                    placeholder="Your Name"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor={"tel"}>Phone</label>
                  <input
                    placeholder="Phone Number"
                    type={"tel"}
                    name={"phone"}
                    onChange={this.handleChange}
                    id={"phone"}
                    required={true}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor={"email"}>Email</label>
                  <input
                    placeholder="Your Email"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor={"type"}>Type</label>
                  <select name={"type"} id={"type"}>
                    <option value="g">General Question</option>
                    <option value="ss">Service and Support</option>
                    <option value="sp">Spare Parts</option>
                    <option value="m">Marketing</option>
                  </select>
                  {/* <Dropdown
                  options={options}
                  onChange={this._onSelect}
                  value={defaultOption}
                  placeholder="Select an option"
                  className="select"
                  name={"type"}
                  id={"type"}
                /> */}
                </div>
                <div className={styles.field}>
                  <label htmlFor={"message"}>Message</label>
                  <textarea
                    placeholder="Your Message"
                    rows={7}
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                  />
                </div>
                <div className={styles.field}>
                  <div data-netify-recaptcha="true"></div>
                </div>
                <div className={styles.submitButton}>
                  <Button title="Submit" type="submit" />
                </div>
              </form>
            ) : (
              <div>
                <h3>Thank you!</h3>
                <p>Your enquiry has been submitted.</p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

import React, { Component } from "react";
import styles from "./Contact.module.scss";
import { Layout } from "src/layout/Layout";
import { Button } from "src/components/Button/Button";
import { FaPhone } from "react-icons/fa";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "g", label: "General Question" },
  { value: "ss", label: "Service and Support" },
  { value: "s", label: "Spare Parts" },
  { value: "m", label: "Marketing" }
];

const defaultOption = options[0];

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
            <form>
              <div className={styles.field}>
                <label>Name</label>
                <input placeholder="Your Name" />
              </div>
              <div className={styles.field}>
                <label>Phone</label>
                <input placeholder="Phone Number" />
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input placeholder="Your Email" />
              </div>
              <div className={styles.field}>
                <label>Type</label>
                <Dropdown
                  options={options}
                  onChange={this._onSelect}
                  value={defaultOption}
                  placeholder="Select an option"
                  className="select"
                />
              </div>
              <div className={styles.field}>
                <label>Message</label>
                <textarea placeholder="Your Message" rows={7} />
              </div>
              <div className={styles.submitButton}>
                <Button title="Submit" />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

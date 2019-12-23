import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "gatsby";
import styles from "./Footer.module.scss";
import LogoLight from "../../assets/logo-light.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <img src={LogoLight} alt="Snug NZ" />
          <div className={styles.text}>
            <Link to="/tnc">
              <p>Terms & Conditions</p>
            </Link>
            <span className="onlyShowInDesktop">|</span>
            <p>Copyright © SnugNZ group Ltd 2020 All rights reserved. </p>
          </div>
        </div>
      </footer>
    );
  }
}

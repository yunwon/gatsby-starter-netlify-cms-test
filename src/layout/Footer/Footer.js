import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "gatsby";
import styles from "./Footer.module.scss";
import LogoLight from "../../img/logo-light.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <div className={styles.container}>
          <Link to={this.props.language === "Chinese" ? "/cn" : "/"}>
            <img src={LogoLight} alt="Snug NZ" />
          </Link>
          <div className={styles.text}>
            <Link to="/tnc">
              <p>
                {this.props.language === "Chinese"
                  ? "条款规定"
                  : "Terms & Conditions"}
              </p>
            </Link>
            <span className="onlyShowInDesktop">|</span>
            <p>Copyright © SnugNZ group Ltd 2020 All rights reserved. </p>
          </div>
        </div>
      </footer>
    );
  }
}

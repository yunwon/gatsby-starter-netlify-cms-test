import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import styles from "./Header.module.scss";
import { slide as Menu } from "react-burger-menu";
import Logo from "../../assets/logo.svg";
import Burger from "../../assets/burger.svg";
import { Button } from "../../components/Button/Button";
import { FaPhone } from "react-icons/fa";

export default class Header extends Component {
  state = {
    showPhoneNo: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add(styles.smaller);
      this.setState({ showPhoneNo: true });
    } else {
      headerEl.classList.remove(styles.smaller);
      this.setState({ showPhoneNo: false });
    }
  };
  showSettings(event) {
    event.preventDefault();
  }
  renderNavItems() {
    return (
      <div className={styles.nav}>
        <div className={styles.secondaryNav}>
          <span className={styles.languages}>
            <Link to="/">English</Link> | <Link to="/cn">Chinese</Link>
          </span>
          <div className={styles.buttons}>
            <div className={styles.loginButton}>
              <Button title={this.props.login} outlined />
            </div>
            <div className={styles.phoneButton}>
              <a href="tel:09-818-6606">
                <Button
                  title={this.props.phoneNo}
                  icon={<FaPhone className="flipImage" />}
                  iconOnly={this.state.showPhoneNo}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.primaryNav}>{this.props.menu}</div>
      </div>
    );
  }

  render() {
    let mobileHeaderClasses = classNames(styles.header, styles.header_mobile);
    let desktopHeaderClasses = classNames(styles.header, styles.header_desktop);
    return (
      <header className={styles.wrapper}>
        <div className={mobileHeaderClasses}>
          <Link to={this.props.linkToHome}>
            <img src={Logo} alt="Logo" />
          </Link>
          <Menu
            right
            width={260}
            customBurgerIcon={<img src={Burger} alt="open menu" />}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            {this.renderNavItems()}
          </Menu>
        </div>
        <div className={desktopHeaderClasses} id="js-header">
          <Link to={this.props.linkToHome}>
            <img src={Logo} alt="Logo" />
          </Link>
          {this.renderNavItems()}
        </div>
      </header>
    );
  }
}

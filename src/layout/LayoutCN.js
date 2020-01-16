import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import useSiteMetadata from "../components/SiteMetadata";
import { withPrefix } from "gatsby";
import "typeface-poppins";

import "../stylesheets/index.scss";
import styles from "./Layout.module.scss";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setShow(show === false ? true : false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <a
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Services
      </a>
      {show && (
        <div
          id="dropdown-menu"
          anchorEl={anchorEl}
          onClose={handleClose}
          className="dropdownMenu"
        >
          <Link to="/ourworks/index-cn">Our Works</Link>
          <Link to="/insulation/index-cn">Insulation</Link>
          <Link to="/healthyhomes/index-cn">Healthy Homes</Link>
        </div>
      )}
    </div>
  );
};

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div id="outer-container" className={styles.outerContainer}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="android-chrome-192x192"
          sizes="192x192"
          href={`${withPrefix("/")}img/android-chrome-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Header
        login="Login"
        phoneNo="09-818-6606"
        // mobileMenu={
        //   <>
        //     <Link exact to="/">
        //       Home
        //     </Link>
        //     <div>
        //       <span>Services</span>
        //       <div>
        //         <Link to="/services/ourworks">Our Works</Link>
        //         <Link to="/services/insulation">Insulation</Link>
        //         <Link to="/services/healthyhomes">Healthy Homes</Link>
        //       </div>
        //     </div>
        //     <Link to="/product">Product</Link>
        //     <Link to="/about">About Us</Link>
        //     <Link to="/support">Support</Link>
        //     <Link to="/contact">Contact Us</Link>
        //   </>
        // }
        menu={
          <>
            <Link exact to="/index-cn">
              還不賴
            </Link>
            <DropdownMenu />
            <Link to="/products">Product</Link>
            <Link to="/about">About Us</Link>
            <Link to="/support">Support</Link>
            <Link to="/contact">Contact Us</Link>
          </>
        }
        linkToHome="/index-cn"
      />
      <div id="page-wrap" className={styles.main}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;

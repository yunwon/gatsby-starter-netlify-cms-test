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

const ServicesDropdownMenu = () => {
  return (
    <div className="dropdown">
      <Link className="dropbtn">Services</Link>
      <div className="dropdown-content">
        <Link to="/ourworks">Our Works</Link>
        <Link to="/insulation">Insulation</Link>
        <Link to="/healthyhomes">Healthy Homes</Link>
      </div>
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
        langauge="English"
        phoneNo="09-818-6606"
        menu={
          <>
            <Link exact to="/">
              Home
            </Link>
            <ServicesDropdownMenu />
            <Link to="/products" className="primary-menu">
              Products
            </Link>
            <Link to="/other" className="primary-menu">
              Other
            </Link>
            <Link to="/about" className="primary-menu">
              About Us
            </Link>
            <Link to="/support" className="primary-menu">
              Support
            </Link>
            <Link to="/contact" className="primary-menu">
              Contact Us
            </Link>
          </>
        }
        linkToHome="/"
      />
      <div id="page-wrap" className={styles.main}>
        {children}
      </div>
      <Footer langauge="English" />
    </div>
  );
};

export default TemplateWrapper;

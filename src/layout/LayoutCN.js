import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import useSiteMetadata from "../components/SiteMetadata";
import { withPrefix } from "gatsby";
import "typeface-poppins";

import "../stylesheets/index.scss";
import "normalize.css";
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
        公司服务
      </a>
      {show && (
        <div
          id="dropdown-menu"
          anchorEl={anchorEl}
          onClose={handleClose}
          className="dropdownMenu"
        >
          <Link to="/ourworks/cn">我們的作品</Link>
          <Link to="/insulation/cn">絕緣</Link>
          <Link to="/healthyhomes/cn">健康的家</Link>
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
        language="Chinese"
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
            <Link exact to="/cn">
              首页
            </Link>
            <DropdownMenu />
            <Link to="/products/cn">我们的产品</Link>
            <Link to="/about/cn">公司介绍</Link>
            <Link to="/support/cn">支持下载</Link>
            <Link to="/contact/cn">联系我们</Link>
          </>
        }
        linkToHome="/cn"
      />
      <div id="page-wrap" className={styles.main}>
        {children}
      </div>
      <Footer language="Chinese" />
    </div>
  );
};

export default TemplateWrapper;

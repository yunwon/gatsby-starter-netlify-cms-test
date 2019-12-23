import React, { Component } from "react";
import styles from "./Support.module.scss";
import { Layout } from "src/layout/Layout";
import HeroSection from "src/components/HeroSection/HeroSection";
import BgImage from "src/assets/services/insulation/hero.png";

export default class Support extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <HeroSection
          title="Support"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Sit amet porttitor eget dolor morbi non arcu risus quis. "
          bgImage={BgImage}
        />
      </Layout>
    );
  }
}

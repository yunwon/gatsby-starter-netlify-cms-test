import React, { Component } from "react";
import styles from "./Tnc.module.scss";
import { Layout } from "src/layout/Layout";

export default class Tnc extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <div>TermsAndConditions</div>
      </Layout>
    );
  }
}

import React from "react";
import Layout from "../layout/Layout";

const styles = {
  container: {
    display: "flex",
    aligItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "10vh 0"
  }
};
const NotFoundPage = () => (
  <Layout>
    <div style={styles.container}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;

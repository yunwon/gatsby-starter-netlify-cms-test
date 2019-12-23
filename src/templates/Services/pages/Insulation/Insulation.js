import React, { Component } from "react";
import styles from "./Insulation.module.scss";
import { Layout } from "src/layout/Layout";
import HeroSection from "src/components/HeroSection/HeroSection";
import BgImage from "src/assets/services/insulation/hero.png";
import Image01 from "src/assets/services/insulation/01.png";
import Image02 from "src/assets/services/insulation/02.png";
import Image03 from "src/assets/services/insulation/03.png";

export default class Insulation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <HeroSection
          title="Insulation"
          subtitle="Snug Insulation Limited can review your home plans, 
          provides advice on energy efficient home design, and supply 
          and install the best products and systems for you."
          bgImage={BgImage}
        />
        <div className={styles.section}>
          <img src={Image01} alt="New House" />
          <div>
            <h4>New House</h4>
            <p>
              Snug Insulation can help design a comfortable, warm and healthy
              home that will meet your goals and lifestyle expectations all year
              round. The choice of building materials & systems at time of
              construction is crucial - Choose wisley and big energy savings can
              be locked in for the lifetime of the property, saving thousands of
              dollars and creating a healthy environment for all of the
              occupants.
            </p>
          </div>
        </div>
        <div className={styles.bg}>
          <div className={styles.section}>
            <img
              src={Image02}
              alt="Major Renovations"
              className={styles.right}
            />
            <div>
              <h4>Major Renovations</h4>
              <p>
                If you want to enhance how your house performs and reduce your
                power bill, please think about Snug Insulation. We can help you
                to achieve your goals when building your dream home. Certain
                crucial energy saving improvements such as Wall insulation can
                only be done cost effectively during renovations so dont miss
                this opportunity.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img src={Image03} alt="Upgrading your home" />
          <div>
            <h4>Upgrading your home</h4>
            <p>
              Are you sick of being cold in your house in winter? <br /> Are you
              feeling too hot in summer? <br /> Does your energy bill disturb
              you? <br />
              Talk to Snug Insulation about to the right Product options to
              upgrade your house and make it comfortable and economical to run.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

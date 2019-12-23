import React, { Component } from "react";
import styles from "./OurWorks.module.scss";
import { Layout } from "src/layout/Layout";
import HeroSection from "src/components/HeroSection/HeroSection";
import BgImage from "src/assets/services/insulation/hero.png";
import Image02 from "src/assets/services/insulation/02.png";

export default class OurWorks extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Layout>
        <HeroSection
          title="Our Works"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Sit amet porttitor eget dolor morbi non arcu risus quis. "
          bgImage={BgImage}
        />
        <div className={styles.section}>
          <img src={Image02} alt="Ipsum suspendisse ultrices" />
          <div>
            <h4>Ipsum suspendisse ultrices</h4>
            <h5>
              <span>2018</span>ABC Ltd.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              enim ut sem viverra aliquet eget sit amet tellus. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a. Dignissim cras
              tincidunt lobortis feugiat vivamus at augue. Egestas tellus rutrum
              tellus pellentesque eu tincidunt tortor aliquam nulla. Sed sed
              risus pretium quam vulputate dignissim suspendisse. Orci phasellus
              egestas tellus rutrum. Blandit massa enim nec dui nunc. Ut diam
              quam nulla porttitor massa id neque aliquam vestibulum. Venenatis
              a condimentum vitae sapien pellentesque.
            </p>
          </div>
        </div>
        <div className={styles.bg}>
          <div className={styles.section}>
            <img
              src={Image02}
              alt="Ipsum suspendisse ultrices"
              className={styles.right}
            />
            <div>
              <h4>Ipsum suspendisse ultrices</h4>
              <h5>
                <span>2018</span>ABC Ltd.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                enim ut sem viverra aliquet eget sit amet tellus. Nulla posuere
                sollicitudin aliquam ultrices sagittis orci a. Dignissim cras
                tincidunt lobortis feugiat vivamus at augue. Egestas tellus
                rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
                Sed sed risus pretium quam vulputate dignissim suspendisse. Orci
                phasellus egestas tellus rutrum. Blandit massa enim nec dui
                nunc. Ut diam quam nulla porttitor massa id neque aliquam
                vestibulum. Venenatis a condimentum vitae sapien pellentesque.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img src={Image02} alt="Ipsum suspendisse ultrices" />
          <div>
            <h4>Ipsum suspendisse ultrices</h4>
            <h5>
              <span>2018</span>ABC Ltd.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              enim ut sem viverra aliquet eget sit amet tellus. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a. Dignissim cras
              tincidunt lobortis feugiat vivamus at augue. Egestas tellus rutrum
              tellus pellentesque eu tincidunt tortor aliquam nulla. Sed sed
              risus pretium quam vulputate dignissim suspendisse. Orci phasellus
              egestas tellus rutrum. Blandit massa enim nec dui nunc. Ut diam
              quam nulla porttitor massa id neque aliquam vestibulum. Venenatis
              a condimentum vitae sapien pellentesque.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

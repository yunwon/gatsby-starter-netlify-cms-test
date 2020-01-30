import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./index-page.module.scss";
import { Button } from "../../../components/Button/Button";
import Slider from "../../../components/Slider/Slider";
import { LearnMoreButton } from "../../../components/LearnMoreButton/LearnMoreButton";
import whyChooseUs01 from "../../../assets/home/whyChooseUs01.svg";
import SectionWithIcons from "../../../components/SectionWithIcons/SectionWithIcons";
import Quote from "../../../assets/home/quote.svg";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";
import { Modal } from "react-bootstrap";

class IndexPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: null
    };
  }

  handleClose = () => {
    this.setState({ showModal: null });
  };

  handleShow = id => {
    this.setState({ showModal: id });
  };

  render() {
    const {
      title,
      subTitle,
      mainButton,
      events,
      whatWeDo,
      whyChooseUs,
      ourProducts,
      testimonials,
      contact,
      language
    } = this.props;
    return (
      <div>
        {/* 01. hero */}
        <div className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{subTitle}</p>
              <Link to={language === "English" ? `/contact` : `/contact/cn`}>
                <Button title={mainButton} bigButton />
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}></div>
        </div>
        {/* 02. event banner */}
        <div className={styles.event}>
          <Slider>
            {events.event.map(event => (
              <div>
                <div className={styles.eventInner}>
                  <h1>{event.title}</h1>
                  <p>{event.description}</p>
                  <div onClick={() => this.handleShow(event.title)}>
                    <LearnMoreButton language={language} />
                  </div>
                  <Modal
                    show={this.state.showModal === event.title}
                    onHide={this.handleClose}
                    className="modal-custom"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>{event.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: event.modal.image,
                          alt: event.title
                        }}
                      />
                      <p>{event.modal.description}</p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* 03. What We Do */}
        <div className={styles.whatWeDo}>
          <div className={styles.title}>
            <h2>{whatWeDo.title}</h2>
            <p>{whatWeDo.description}</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.image}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: whatWeDo.insulation.image,
                    alt: whatWeDo.insulation.title
                  }}
                />
              </div>
              <div>
                <h4>{whatWeDo.insulation.title}</h4>
                <p>{whatWeDo.insulation.description}</p>
                <Link to={`/${whatWeDo.insulation.linkUri}`}>
                  <LearnMoreButton language={language} />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: whatWeDo.healthyHomes.image,
                    alt: whatWeDo.healthyHomes.title
                  }}
                />
              </div>
              <div>
                <h4>{whatWeDo.healthyHomes.title}</h4>
                <p>{whatWeDo.healthyHomes.description}</p>
                {console.log(whatWeDo.insulation.linkUri)}
                <Link to={`/${whatWeDo.healthyHomes.linkUri}`}>
                  <LearnMoreButton language={language} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 04. Why Choose Us */}
        <SectionWithIcons
          title="Why Choose Us"
          descriptionArray={[
            whyChooseUs.whyChooseUs01.description,
            whyChooseUs.whyChooseUs02.description,
            whyChooseUs.whyChooseUs03.description
          ]}
          icons={[whyChooseUs01, whyChooseUs01, whyChooseUs01]}
        />
        {/* 05. Our Products */}
        <div className={styles.ourProducts}>
          <div className={styles.title}>
            <h2>{ourProducts.title}</h2>
            <p>{ourProducts.description}</p>
            <Link to={language === "English" ? `/products` : `/products/cn`}>
              <LearnMoreButton language={language} />
            </Link>
          </div>
          <div className={styles.cards}>
            {ourProducts.productList.map(item => (
              <div className={styles.card}>
                <div className={styles.image}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: item.image,
                      alt: item.title
                    }}
                  />
                </div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 06. Testimonials */}
        <div className={styles.testimonials_container}>
          <img src={Quote} alt="quote" />
          <h2 className={styles.title}>{testimonials.title}</h2>
          <Slider>
            {testimonials.testimonialList.map(item => (
              <div className={styles.testimonials}>
                <p className={styles.text}>{item.description}</p>
                <div className={styles.profile}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.company}>{item.company}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* 07. Contact Us */}
        <div className={styles.contactUs}>
          <div className={styles.container}>
            <div className={styles.text}>
              <h2>{contact.title}</h2>
              <p className={styles.subtitle}>
                Call us at{" "}
                <a href={`tel:${contact.phoneNo}`}>{contact.phoneNo}</a>
              </p>
              <Link to={language === "English" ? `/contact` : `/contact/cn`}>
                <Button title={contact.button} bigButton />
              </Link>
            </div>
          </div>
          <div className={styles.contactImage}></div>
        </div>
      </div>
    );
  }
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  events: PropTypes.object,
  mainButton: PropTypes.string,
  whatWeDo: PropTypes.object,
  whyChooseUs: PropTypes.object,
  ourProducts: PropTypes.object,
  testimonials: PropTypes.object,
  contact: PropTypes.object,
  language: PropTypes.oneOf(["English", "Chinese"])
};

export default IndexPageTemplate;

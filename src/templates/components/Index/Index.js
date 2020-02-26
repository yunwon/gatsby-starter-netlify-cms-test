import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./index-page.module.scss";
import { Button } from "../../../components/Button/Button";
import { LearnMoreButton } from "../../../components/LearnMoreButton/LearnMoreButton";
import whyChooseUs01 from "../../../assets/home/whyChooseUs01.svg";
import SectionWithIcons from "../../../components/SectionWithIcons/SectionWithIcons";
import Quote from "../../../assets/home/quote.svg";
import PreviewCompatibleImage from "../../../components/PreviewCompatibleImage";
import { Carousel, Modal } from "react-bootstrap";

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
      partners,
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
          <Carousel>
            {events.event.map(event => (
              <Carousel.Item>
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
                        className="d-block w-100"
                      />
                      <p>{event.modal.description}</p>
                    </Modal.Body>
                  </Modal>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* 03. What We Do */}
        <div className={styles.whatWeDo}>
          <div className={styles.title}>
            <h2>{whatWeDo.title}</h2>
            <p>{whatWeDo.description}</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: whatWeDo.insulation.image,
                  alt: whatWeDo.insulation.title
                }}
                className={styles.image}
              />
              <div>
                <h5>{whatWeDo.insulation.title}</h5>
                <p>{whatWeDo.insulation.description}</p>
                <Link to={`/${whatWeDo.insulation.linkUri}`}>
                  <LearnMoreButton language={language} />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: whatWeDo.healthyHomes.image,
                  alt: whatWeDo.healthyHomes.title
                }}
                className={styles.image}
              />
              <div>
                <h5>{whatWeDo.healthyHomes.title}</h5>
                <p>{whatWeDo.healthyHomes.description}</p>
                <Link to={`/${whatWeDo.healthyHomes.linkUri}`}>
                  <LearnMoreButton language={language} />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: whatWeDo.other.image,
                  alt: whatWeDo.other.title
                }}
                className={styles.image}
              />
              <div>
                <h5>{whatWeDo.other.title}</h5>
                <p>{whatWeDo.other.description}</p>
                <Link to={`/${whatWeDo.other.linkUri}`}>
                  <LearnMoreButton language={language} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 04. Why Choose Us */}
        <div className={styles.whyChooseUs}>
          <div className={styles.inner}>
            <h2 className={styles.title}>{whyChooseUs.title}</h2>
            <div className={styles.items}>
              {whyChooseUs.iconList.map(item => (
                <div className={styles.item}>
                  {/* <div className={styles.icon}>{item.icon}</div> */}
                  <div className={styles.text}>
                    {item.title && <h5>{item.title}</h5>}
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 05. Our Products */}
        {/* 06. Partners */}
        <div className={styles.partners}>
          <div className={styles.inner}>
            <h2>{partners.title}</h2>
            <div className={styles.logos}>
              {partners.list.map(item => (
                <div className={styles.item}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: item.image,
                      alt: item.title
                    }}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 07. Testimonials */}
        <div className={styles.testimonials_container}>
          <img src={Quote} alt="quote" />
          <h2 className={styles.title}>{testimonials.title}</h2>
          <Carousel>
            {testimonials.testimonialList.map(item => (
              <Carousel.Item>
                <div className={styles.testimonials}>
                  <p className={styles.text}>{item.description}</p>
                  <div className={styles.profile}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* 08. Contact Us */}
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
  image: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  events: PropTypes.object,
  mainButton: PropTypes.string,
  whatWeDo: PropTypes.object,
  whyChooseUs: PropTypes.object,
  ourProducts: PropTypes.object,
  partners: PropTypes.object,
  testimonials: PropTypes.object,
  contact: PropTypes.object,
  language: PropTypes.oneOf(["English", "Chinese"])
};

export default IndexPageTemplate;

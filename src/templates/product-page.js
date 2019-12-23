import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import styles from "./product-page.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import BgImage from "../assets/product/hero.png";
import WoolThumb from "../assets/home/woolproduct.png";
import Wool from "../assets/product/wool.jpg";
import Polyester from "../assets/home/polyester.png";
import GlassWoolThumb from "../assets/home/glasswool.png";
import GlassWool from "../assets/product/glasswool.jpg";
import { LearnMoreButton } from "../components/LearnMoreButton/LearnMoreButton";

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing
}) => (
  <div>
    <HeroSection
      title="Our Product"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Sit amet porttitor eget dolor morbi non arcu risus quis. "
      bgImage={BgImage}
    />
    {/* 01. Overview */}
    <div className={styles.overview}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={WoolThumb} alt="Wool products" />
          <div>
            <h5>Natural Wool Products</h5>
            <p>
              Natural wool insulation in blanket or batting form. Ideal for
              walls of new buildings and ceilings in new and existing premises.
            </p>
            <a href="#wool">
              <LearnMoreButton />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Polyester} alt="Polyester" />
          <div>
            <h5>Polyester</h5>
            <p>
              Snug Insulation is proud to introduce our high-performance range
              of 100% polyester thermal and acoustic insulation products,
              designed for the residential and commercial buildings.
            </p>
            <a href="#polyester">
              <LearnMoreButton />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <img src={GlassWoolThumb} alt="Glass Wool" />
          <div>
            <h5>Glass Wool</h5>
            <p>
              EarthWool is rot-proof, odourless, non-hygroscopic, does not
              sustain vermin and will not encourage the growth of fungi, mould
              or bacteria.
            </p>
            <a href="#glassWool">
              <LearnMoreButton />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* 02. More Info */}
    <div className={styles.bg} id="wool">
      <div className={styles.section}>
        <h4>Natural Wool Product</h4>
        <img src={Wool} alt="Wool products" />
        <div className={styles.description}>
          <div>
            <h5>Genuine Sheeps Wool</h5>
            <p>
              Supa-Fill is genuine sheep's wool. This is unlike some other forms
              of synthetic materials that make reference to "wool" such as
              Rockwool etc. Supa-Filll is a renewable resource produced
              naturally by sheep.
            </p>
          </div>
          <div>
            <h5>Batting and blanket wool fibre insulation</h5>
            <p>
              Natural wool insulation in blanket or batting form. Ideal for
              walls of new buildings and ceilings in new and existing premises.
            </p>
          </div>
          <div>
            <h5>Supa-Fill Machine Blown Wool Insulation</h5>
            <p>
              Supa-Fill is a natural wool fibre lofted insulation that has been
              treated and processed to provide a cost effective efficient
              insulation.
              <br />
              <br />
              Supa-Fill can be installed in ceilings of homes or offices.
              <br />
              <br />
              Supa-Fill is installed by only approved installers using a machine
              blowing technique that provides a full blanket effect.
              <br />
              <br />
              Machine installation takes advantage of wools natural bonding
              properties ensuring that the product maintains its loft and will
              not shift. This provides a superior and long lasting thermal
              insulating performance.
              <br />
              <br />
              Natural Wool Products operates a strict code of practice which
              monitors and ensures product is installed correctly by qualified
              Installers. This will provide a guaranteed thermal insulation
              rating. <br />
              <br />
              Supa-Fill is sourced from a combnination of scoured wool and wools
              recycled from the spinners of yarn for the carpet making industry.{" "}
              <br />
              <br />
              Supa-Fill, Our machine blown natural wool fibre contains carpet
              wool types which means that the product in your ceiling is
              basicaly the same as the carpet you lay on the floor throughout
              your home or office. The only difference is that it has not been
              woven. <br />
              <br />
              Unlike synthetic products, the wool fibre is hollow which enables
              air to be trapped naturally. The unique characteristics of the
              fibre ensure that loft is retained resulting in an extended useful
              life of the material.
              <br />
              <br />
              Supa-Fill is installed at a range of standard thermal values
              ranging from R3.2 to R5.0, however vertually any thermal value can
              be calibrated and installed. <br />
              <br />
              Normally values of R3.2, R3.6 or R4.0 are installed in the North
              Island with R3.6, R4.0 or R5.0 installed in the South Island.
            </p>
          </div>
          <div>
            <h5>Batting and blanket wool fibre insulation</h5>
            <p>
              Insulation material for walls and ceilings is available in either
              wool blanket or batting form. It is available for installation
              into the walls and ceilings of buildings. Material is safe and
              healthy and requires no protective clothing for handling or
              installing.
            </p>
          </div>
          <div>
            <h5>Benefits of Wool</h5>
            <h6>Wool is a Natural Choice</h6>
            <p>
              Wool is unique in its insulation properties and brings its proven
              characteristics into our residential and business environments.
              Wool is excellent in providing healthy, warm, dry and comfortable
              living environments. Wool has been proven through its years of use
              in fabrics, apparel, bedding and carpets. It is a natural fibre
              used universally for personal comfort and warmth.
              <br />
              <br />
              It is only natural that this same product be used in the form of
              home insulation. Wool fibre has natural interlocking scales on its
              outer surface. This ensures strength, resilience and pliability
              which enables it to bend without breaking and return to hold its
              form and shape. We wear it, walk on it, babies sleep in it, so why
              not insulate with it ?
            </p>
            <h6>Wool Breathes, Wool is Not Inert</h6>
            <p>
              Wool is the only insulation material that is not inert. Wool fibre
              breathes and reacts to climatic change which effectively allows
              your home and office to breathe. Wool is an extremely effective
              insulator when moisture is present within the environment. This is
              a continual occurrence due to the ever changing level of humidity
              within the atmosphere. Insulation products without absorption
              ability can be adversely effected by humidity. The presence of
              moisture is evidenced by water, condensation, mould and mildew
              within buildings.
            </p>
            <h6>Wool is a Hygroscopic Insulator</h6>
            <p>
              This means that wool can absorb moisture without becoming wet to
              touch. Wools natural insulation ability is not affected by
              moisture because of its built in natural crimp. As the fibres
              naturally repel each other, an amount of air is retained which
              provides an insulation effect. The fibre has the capability of
              absorbing up to 30% of its own weight in moisture, before it
              becomes wet to touch. Wool in essence, provides a form of natural
              air-conditioning!
            </p>
            <h6>Wool is Healthy</h6>
            <p>
              Warm and dry environments are essential in providing healthy
              living conditions. Wool has a natural ability to achieve this by
              absorbing and desorbing moisture. Through this characteristic,
              benefits can be obtained by sufferers of a wide range of health
              conditions such as asthmatic and other respiratory ailments.
              Unlike some finer micron synthetic materials, the body does not
              absorb wool fibre through inhalation. Wool used for insulation is
              on average in the 25 – 40 micron range. Synthetic materials used
              in other forms of insulation products can be as low as 6 micron.
              Wool is a natural protein substance. The protein from wool fibre
              is currently being used in the cosmetic and pharmaceutical
              industries. This would obviously not occur if there was an element
              of risk or harmful effect.
            </p>
            <h6>Wool is Non Allergic and Safe to Handle</h6>
            <p>
              Wool being a natural fibre contains no irritants, is non toxic and
              absolutely safe to handle. The fibre contains no dangerous dust
              and does not require breathing protection. No protective gloves or
              clothing are required in handling or installing.
            </p>
            <h6>Wool Absorbs Gases & Fumes</h6>
            <p>
              Wool based products reduce the risk to health and environment as a
              result of its ability to absorb gases and fumes such as
              formaldehydes and dioxides that are present in construction and
              finishing materials associated with building. Wool can absorb many
              times more formaldahyde than is found in the average home.
            </p>
            <h6>Wool is Very Low in Conductivity</h6>
            <p>
              Natural wool has very low conductivity which means that it is very
              difficult for heat to transfer through the fibre. Experience shows
              that wool does not settle or compact over time as some synthetic
              products do, thereby effecting thermal effectiveness.
            </p>
            <h6>Wool is Fire Resistant</h6>
            <p>
              Wool is naturally fire resistant and will not burn but melt away
              from its ignition source and extinguish. Wool has a higher fire
              resistance than cellulose and cellular plastic insulation. Wool
              used in insulation has been tested disclosing an ignitability and
              spread of flame index of zero and smoke developed index of 5.
            </p>
            <h6>Wool is Environmentally Friendly</h6>
            <p>
              We live in a country proud of its ecological approach towards
              environmental management. Wool is a natural product that emits no
              harmful chemicals that pollute our atmosphere, soil or water ways.
              Wool is safe to our environment and is a renewable resource.
            </p>
            <h6>Wool is Low in Embodied Energy</h6>
            <p>
              Embodied energy is a measurement of the amount of energy required
              in manufacture. Some insulation materials require a tremendous
              amount of energy to manufacture a product designed to reduce
              domestic energy consumption. The question can be asked if some
              products, during an economic lifetime, will save an amount of
              energy greater than that utilised in their manufacture. Wool
              insulation products require a minimal amount of energy compared to
              the manufacture of some synthetic products. With the necessity to
              conserve energy resources within New Zealand, embodied energy is
              important to everyone. Wool used in insulation is a by-product
              from the manufacturing sector of the wool industry. This in turn
              illiminates waste and provides a positive impact on the
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.section} id="polyester">
      <h4>Polyester</h4>
      <img src={Polyester} alt="Polyester" />
      <div className={styles.description}>
        <div>
          <h5>Thermally bonded with no chemical additives</h5>
          <p>
            Polyester insulation products are made from 100% polyester fibre,
            bonded using heat instead of traditional chemical binders. Polyester
            is naturally resistant to fire, moisture, vermin, insects, mould and
            bacteria, eliminating the need for any chemical additives. Our
            polyester insulation materials are non-toxic, non-irritating,
            non-allergenic and safe for anyone coming into contact with them.
            And that means no nasty itching and scratching and no ongoing health
            concerns for building occupiers.
          </p>
        </div>
        <div>
          <h5>Eco-friendly manufacture and recycling practices</h5>
          <p>
            Our Polyester products are committed to Quality and Environmental
            best practice through our ISO 9001 and ISO 14001 certified Quality
            and Environmental Management Systems. Our Polyester insulation
            products are made from only polyester fibres so they remain fully
            recyclable at the end of their lives. Polyester products are
            manufactured under our Zero Waste policy and using a low-energy
            production process, putting them among the most
            environmentally-friendly insulation solutions on the market.
          </p>
        </div>
        <div>
          <h5>Safe and friendly solutions for new and existing homes</h5>
          <p>
            Whether your building, renovating or just upgrading insulation in an
            existing home, Snug Insualtion has the right products for the job.
            When it comes to your home and family it just makes sense to
            insulate with a trusted, safe and friendly insulation product such
            as our NZ made GreenStuf® - its warmth you can really feel. We’ve
            got a great range of thermal and acoustic solutions for walls,
            ceilings and underfloors that will keep your home warm and dry in
            winter, cool in summer and energy-efficient all year round.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.bg} id="glassWool">
      <div className={styles.section}>
        <h4>Glass Wool</h4>
        <img src={GlassWool} alt="GlassWool" />
        <div className={styles.description}>
          <div>
            <h5>What is EarthWool made of?</h5>
            <p>
              EarthWool is made using recycled glass bottles (up to 80% recycled
              content), sand and a revolutionary sustainable binder making it
              the best choice for environmentally conscious customers.
            </p>
          </div>
          <div>
            <h5>Why is EarthWool different than other forms of insulation?</h5>
            <p>
              Knauf Insulation’s new EarthWool products don’t look or feel like
              any insulation you’ve ever experienced, that’s because the natural
              brown colour represents a level of sustainability and ease of
              handling never before achieved in New Zealand. The colour and
              ‘super soft’ feel comes from a revolutionary sustainable binder
              which does not contain the oil based chemicals, added formaldehyde
              or artificial colours commonly used in other insulation.
            </p>
          </div>
          <div>
            <h5>Why is EarthWool brown?</h5>
            <p>
              The distinctive brown colour of EarthWool® results from ECOSE®
              Technology. This natural binding process leads to a natural shade
              of earthy brown—free from dye or colorants. This is a result of
              five years of intensive research and development as part of our
              commitment to being at the forefront of sustainability. In some
              cases if EarthWool is exposed to UV radiation it may result in a
              white bleaching effect, however product performance is not
              diminished.
            </p>
          </div>
          <div>
            <h5>
              Why is EarthWool softer and less itchy than traditional glasswool?
            </h5>
            <p>
              EarthWool® uses a combination of new technologies which make the
              product more comfortable to handle. Firstly, Knauf Insulation’s
              proprietary fiberisation process creates longer strands resulting
              in less ‘ends’ to reduce mechanical irritation. Secondly, Knauf
              Insulation’s patented ECOSE Technology results in a much softer,
              less ‘crunchy’ and less dusty insulation product compared to our
              traditional glasswool products made using formaldehyde. EarthWool
              is easy to cut.
            </p>
          </div>
          <div>
            <h5>
              How does the use of EarthWool affect the air quality in living
              areas?
            </h5>
            <p>
              With no added formaldehyde, EarthWool is suitable for use in
              households with allergies. Knauf has recently become the world’s
              first company to receive the coveted Eurofins Indoor Air Comfort
              Gold standard. The Gold standard certificate was awarded to Knauf
              Insulation’s revolutionary new EarthWool products made with ECOSE
              Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;

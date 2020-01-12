import React from "react";
import PropTypes from "prop-types";
import { ProductPageTemplate } from "../../templates/product-page";

const ProductPagePreview = ({ entry, getAsset }) => {
  // const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  // const entryTestimonials = entry.getIn(["data", "testimonials"]);
  // const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  // const entryPricingPlans = entry.getIn(["data", "pricing", "plans"]);
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  const data = entry.getIn(["data"]).toJS();

  return (
    <ProductPageTemplate
      // image={entry.getIn(["data", "image"])}
      // title={entry.getIn(["data", "title"])}
      // id={entry.getIn(["data", "id"])}
      // intro={entry.getIn(["data", "intro"])}
      image={data.image}
      title={data.title}
      id={data.id}
      intro={data.intro}
      productList={data.productList}
      // productList={{
      //   title: entry.getIn(["data", "productList", "title"]),
      //   image: getAsset(entry.getIn(["data", "productList", "image"])),
      //   id: entry.getIn(["data", "productList", "id"]),
      //   intro: entry.getIn(["data", "productList", "intro"]),
      //   descriptionList: {
      //     title: entry.getIn([
      //       "data",
      //       "productList",
      //       "descriptionList",
      //       "title"
      //     ]),
      //     description: {
      //       subTitle: entry.getIn([
      //         "data",
      //         "productList",
      //         "descriptionList",
      //         "title",
      //         "subTitle"
      //       ]),
      //       subDescription: entry.getIn([
      //         "data",
      //         "productList",
      //         "descriptionList",
      //         "title",
      //         "subDescription"
      //       ])
      //     }
      //   }
      // }}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProductPagePreview;

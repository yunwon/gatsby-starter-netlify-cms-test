import React from "react";
import PropTypes from "prop-types";
import ProductPageTemplate from "../../templates/components/Product/Product";

const ProductCNPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <ProductPageTemplate
      image={data.image}
      title={data.title}
      id={data.id}
      intro={data.intro}
      productList={data.productList}
    />
  );
};

ProductCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProductCNPagePreview;

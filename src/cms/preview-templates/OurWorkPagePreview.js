import React from "react";
import PropTypes from "prop-types";
import { OurWorkPageTemplate } from "../../templates/ourworks-page";

const OurWorkPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <OurWorkPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        works={data.works}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

OurWorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default OurWorkPagePreview;

import React from "react";
import PropTypes from "prop-types";
import OurWorksPageTemplate from "../../templates/components/Services/OurWorks";

const OurWorksCNPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <OurWorksPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        works={data.works}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

OurWorksCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default OurWorksCNPagePreview;

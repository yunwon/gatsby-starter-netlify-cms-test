import React from "react";
import PropTypes from "prop-types";
import { InsulationPageTemplate } from "../../templates/insulation-page";

const InsulationPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  const entrySectionDetails = entry.getIn(["data", "section", "sectionDetail"]);
  const sectionDetails = entrySectionDetails ? entrySectionDetails.toJS() : [];

  if (data) {
    return (
      <InsulationPageTemplate
        title={data.title}
        subTitle={data.subTitle}
        section={{ sectionDetails }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

InsulationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default InsulationPagePreview;

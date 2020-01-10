import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        subTitle={data.subTitle}
        mainButton={data.mainButton}
        eventTitle={data.eventTitle}
        eventdescription={data.eventdescription}
        whatWeDo={data.whatWeDo}
        whyChooseUs={data.whyChooseUs}
        ourProducts={data.ourProducts}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;

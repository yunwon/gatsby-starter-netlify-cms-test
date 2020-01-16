import React from "react";
import PropTypes from "prop-types";
import { IndexCNPageTemplate } from "../../templates/index-page-cn";

const IndexCNPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexCNPageTemplate
        image={data.image}
        title={data.title}
        subTitle={data.subTitle}
        mainButton={data.mainButton}
        events={data.events}
        whatWeDo={data.whatWeDo}
        whyChooseUs={data.whyChooseUs}
        ourProducts={data.ourProducts}
        testimonials={data.testimonials}
        contact={data.contact}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexCNPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexCNPagePreview;

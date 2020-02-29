import React from "react";
import PropTypes from "prop-types";
import IndexPageTemplate from "../../templates/components/Index/Index.js";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        subTitle={data.subTitle}
        mainButton={data.mainButton}
        events={data.events}
        whatWeDo={data.whatWeDo}
        whyChooseUs={data.whyChooseUs}
        whyChooseUsIcons={data.whyChooseUsIcons}
        testimonials={data.testimonials}
        contact={data.contact}
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

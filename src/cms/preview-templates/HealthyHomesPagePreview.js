import React from "react";
import PropTypes from "prop-types";
import HealthyHomesPageTemplate from "../../templates/components/Services/HealthyHomes";

const HealthyHomesPagePreview = ({ entry, widgetFor }) => (
  <HealthyHomesPageTemplate
    title={entry.getIn(["data", "title"])}
    subTitle={entry.getIn(["data", "subTitle"])}
    standards={entry.getIn(["data", "standards"])}
    fiveStandards={entry.getIn(["data", "fiveStandards"])}
    keyDates={entry.getIn(["data", "keyDates"])}
    keyDatesList={entry.getIn(["data", "keyDatesList"])}
  />
);

HealthyHomesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HealthyHomesPagePreview;

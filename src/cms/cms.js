import CMS from "netlify-cms-app";

import "typeface-poppins";
import "../stylesheets/index.scss";

import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import AboutCNPagePreview from "./preview-templates/AboutCNPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import ProductCNPagePreview from "./preview-templates/ProductCNPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import IndexCNPagePreview from "./preview-templates/IndexCNPagePreview";
import OurWorksPagePreview from "./preview-templates/OurWorksPagePreview";
import OurWorksCNPagePreview from "./preview-templates/OurWorksCNPagePreview";
import InsulationPagePreview from "./preview-templates/InsulationPagePreview";
import InsulationCNPagePreview from "./preview-templates/InsulationCNPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import ContactCNPagePreview from "./preview-templates/ContactCNPagePreview";
import HealthyHomesPagePreview from "./preview-templates/HealthyHomesPagePreview";
import HealthyHomesCNPagePreview from "./preview-templates/HealthyHomesCNPagePreview";

// The following window and global config settings below were taken from here.
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/visual-testing-with-storybook.md
// They're required because the netlify-cms runs on a separate webpack config,
// and outside of Gatsby. This ensures any Gatsby components imported into the
// CMS works without errors

// highlight-start
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// Gatsby internal mocking to prevent unnecessary errors
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to
window.___navigate = pathname => {
  alert(`This would navigate to: https://snugnz.netlify.com${pathname}`);
};

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("index-cn", IndexCNPagePreview);
CMS.registerPreviewTemplate("ourworks", OurWorksPagePreview);
CMS.registerPreviewTemplate("ourworks-cn", OurWorksCNPagePreview);
CMS.registerPreviewTemplate("insulation", InsulationPagePreview);
CMS.registerPreviewTemplate("insulation-cn", InsulationCNPagePreview);
CMS.registerPreviewTemplate("healthyhomes", HealthyHomesPagePreview);
CMS.registerPreviewTemplate("healthyhomes-cn", HealthyHomesCNPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("about-cn", AboutCNPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("products-cn", ProductCNPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("contact-cn", ContactCNPagePreview);

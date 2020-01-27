import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";
import "typeface-poppins";

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

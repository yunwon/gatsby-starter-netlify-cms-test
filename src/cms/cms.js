import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import IndexCNPagePreview from "./preview-templates/IndexCNPagePreview";
import OurWorksPagePreview from "./preview-templates/OurWorksPagePreview";
import OurWorksCNPagePreview from "./preview-templates/OurWorksCNPagePreview";
import InsulationPagePreview from "./preview-templates/InsulationPagePreview";
import HealthyHomesPagePreview from "./preview-templates/HealthyHomesPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("index-cn", IndexCNPagePreview);
CMS.registerPreviewTemplate("ourworks", OurWorksPagePreview);
CMS.registerPreviewTemplate("ourworks-cn", OurWorksCNPagePreview);
CMS.registerPreviewTemplate("insulation", InsulationPagePreview);
CMS.registerPreviewTemplate("healthyhomes", HealthyHomesPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

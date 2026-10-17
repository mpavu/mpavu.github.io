// Site content lives in src/content/*.json and is edited with Pages CMS
// (https://app.pagescms.org, see .pages.yml) or directly in the files.
// Case studies have their own file so saving the main "Portfolio" page in
// the CMS can never overwrite them. Sections hide when their list is empty.
import content from "./content/site.json";
import caseStudies from "./content/case-studies.json";

export const siteConfig = { ...content, ...caseStudies };

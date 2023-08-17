import CommonHero from "@/common/ui/common-hero";
import Newsletter from "@/components/news-letter";
import { OurResearch } from "@/components/research-page/our-research";
import { ResearchFindings } from "@/components/research-page/research-findings";
import React from "react";
import { adminPath } from "@/utils/constants";

const getData = async () => {
  const res = await fetch(`${adminPath}/research?populate=deep`);
  return res.json();
};
export const metadata = {
  title: "RESEARCH | MARISTAN",
  description: "Maristan by vigorant",
};
export default async function Research() {
  const data = await getData();
  const pageData = data?.data?.attributes;
  return (
    <>
      <CommonHero data={pageData?.ResearchPage[0]}/>
      <OurResearch card={pageData?.ResearchPage[3]} card2={pageData?.ResearchPage[4]} headingBar={pageData?.HeadingBar}/>
      <ResearchFindings formData={pageData?.ResearchPage[2]} data={pageData?.ResearchPage[5]}/>
      <Newsletter data={pageData?.ResearchPage[1]}/>
    </>
  );
}

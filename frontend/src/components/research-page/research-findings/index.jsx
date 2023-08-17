import React from "react";
import { HeadingBar } from "@/common/ui/heading-bar";
import { SurveyForm } from "./survey-form";
import { LatestResearch } from "./latest-research";
const myData = {
  tagline:"Latest Research Findings",
  title:"Publications"
}


export const ResearchFindings = ({formData, data}) => {
  return (
    <section className="cus-background py-[75px]">
      <div className="px-4">
        <HeadingBar data={myData}/>
      </div>
      <div>
        <SurveyForm data={formData}/>
      </div>
      <div>
        <LatestResearch data={data} />
      </div>
    </section>
  );
};

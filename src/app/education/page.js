import CommonHero from "@/common/ui/common-hero";
import ResourcesTabs from "@/components/education-page/resources-tabs";
import GetInTouch from "@/components/get-in-touch";
import { adminPath } from "@/utils/constants";
import React from "react";

const getData = async () => {
  const res = await fetch(`${adminPath}/education-and-resource?populate=deep`);
  return res.json();
};
export const metadata = {
  title: "EDUCATION & RESOURCES | MARISTAN",
  description: "Maristan by vigorant",
};

export default async function Education() {
  const data = await getData();
  const pageData = data?.data?.attributes;
  return (
    <section className="bg-[#F7F3F0]">
      <CommonHero data={pageData?.educationResources[0]}/>
      <ResourcesTabs data={pageData} clinicalData={pageData?.educationResources[2]}/>
      <GetInTouch data={pageData?.educationResources[1]} about/>
    </section>
  );
}

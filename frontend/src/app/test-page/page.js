import CommonHero from "@/common/ui/common-hero";
import Newsletter from "@/components/news-letter";
import EmpoveringCommunity from "@/components/projects/empovering-community";
import { adminPath } from "@/utils/constants";
import React from "react";

const getData = async () => {
  const res = await fetch(`${adminPath}/all-project?populate=deep`);
  return res.json();
};
export const metadata = {
  title: "ALL PROJECT | MARISTAN",
  description: "Maristan by vigorant",
};
const ProjectData = async () => {
  const res = await fetch(`${adminPath}/projects?populate=deep`);
  return res.json();
};
export default async function testPage() {
  const data = await getData();
  const projectData = await ProjectData();
  const pageData = data?.data?.attributes;
  return (
    <>
      <CommonHero data={pageData?.Hero} />
      <EmpoveringCommunity data={pageData?.HeadingBar} projectData={projectData}/>
      <Newsletter data={pageData?.NewsLetter} />
    </>
  );
}

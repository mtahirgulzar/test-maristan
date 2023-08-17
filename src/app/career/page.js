import CommonHero from "@/common/ui/common-hero";
import { JoinOurTeam } from "@/components/career-page/join-our-team";
import Newsletter from "@/components/news-letter";
import React from "react";
import { adminPath } from "@/utils/constants";

const getData = async () => {
  const res = await fetch(`${adminPath}/our-career?populate=deep`);
  return res.json();
};
export const metadata = {
  title: "CAREER | MARISTAN",
  description: "Maristan by vigorant",
};
export default async function Career() {
  const data = await getData();
  const pageData = data?.data?.attributes;
  return (
    <>
      <CommonHero data={pageData?.Hero}/>
      <JoinOurTeam data={pageData?.Psychotherapist}/>
      <Newsletter data={pageData?.NewsLetter}/>
    </>
  );
}

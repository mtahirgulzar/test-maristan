import CommonHero from "@/common/ui/common-hero";
import TeamsSlider from "@/common/ui/common-hero/teams-slider";
import AboutHistory from "@/components/about-page/about-history";
import Empowering from "@/components/about-page/empowering";
import GetInTouch from "@/components/get-in-touch";
import Newsletter from "@/components/news-letter";
import OurMission from "@/components/our-mission";
import { adminPath } from "@/utils/constants";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IslamicPsychology } from "@/components/about-page/islamic-psycology";

const getData = async () => {
  const res = await fetch(`${adminPath}/aware?populate=deep`);
  return res.json();
};
export const metadata = {
  title: "ABOUT | MARISTAN",
  description: "Maristan by vigorant",
};
export default async function About() {
  const data = await getData();
  const pageData = data?.data?.attributes;
 
  return (
    <>
      <CommonHero data={pageData?.aware[0]} />
      <AboutHistory data={pageData?.HistoryMaristan} />
      <IslamicPsychology data={pageData?.IslamicPsychology} />
      <Empowering data={pageData?.BrighterTomorrow}/>
      <TeamsSlider data={pageData?.DedicatedTeam} />
      <GetInTouch about data={pageData?.aware[1]}/>
      <TeamsSlider data={pageData?.ClinicalTeam}/>
      <Newsletter data={pageData?.aware[2]}/>
    </>
  );
}

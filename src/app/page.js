import EmpoweringMinds from "@/components/empowering-minds";
import GetInTouch from "@/components/get-in-touch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeHero } from "@/components/homehero";
import Newsletter from "@/components/news-letter";
import OurJourney from "@/components/our-journey";
import OurMission from "@/components/our-mission";
import OurTeam from "@/components/our-team";
import UpcomingEvents from "@/components/upcomming-events";
import { adminPath, jwtToken } from "@/utils/constants";
import EnrichKnowledge from "@/components/enrich-knowledge";
import MeetAtMaristan from "@/components/meet-at-maristan";
import ClinicFAQ from "@/components/clinic-FAQ";
import Example from "@/components/example";
const getData = async () => {
  const res = await fetch(`${adminPath}/home?populate=deep`);
  return res.json();
};
export const metadata = {
  title: "HOME | MARISTAN",
  description: "Maristan by vigorant",
};
export default async function HomePage() {
  const data = await getData();
  const pageData = data?.data?.attributes;
  const order = "order";

  return (
    <>
        <HomeHero data={pageData?.home_page[0]} />
        <UpcomingEvents data={pageData?.home_page[1]} />
        <OurJourney data={pageData?.home_page[2]} />
        <OurMission data={pageData?.home_page[3]} home/>
        <EmpoweringMinds data={pageData?.home_page[5]} />
        <EnrichKnowledge data={pageData?.home_page[4]} />
        <GetInTouch data={pageData?.home_page[10]} />
        <OurJourney order={order} data={pageData?.home_page[6]} />
        <OurTeam data={pageData?.home_page[8]} />
        <MeetAtMaristan data={pageData?.home_page[8]} />
        <ClinicFAQ />
        <Newsletter data={pageData?.home_page[9]} />
    </>
  );
}

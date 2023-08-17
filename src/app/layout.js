import { Navbar } from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { adminPath } from "@/utils/constants";

export const metadata = {
  title: "Maristan",
  description: "Maristan by vigorant",
};
const ProjectData = async () => {
  const res = await fetch(`${adminPath}/projects?populate=deep`);
  return res.json();
};
const layoutData = async () => {
  const res = await fetch(`${adminPath}/site?populate=deep`);
  return res.json();
};
export default async function RootLayout({ children }) {
  const projectData = await ProjectData();
  const layoutdata = await layoutData();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar data={projectData} layoutData={layoutdata?.data?.attributes?.Navbar} />
        <main>{children}</main>
        <Footer data={layoutdata?.data?.attributes} />
      </body>
    </html>
  );
}

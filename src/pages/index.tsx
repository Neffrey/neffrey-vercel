// LIBRARIES
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
import HomeAbout from "components/templates/homepage/about";
import HomeHero from "components/templates/homepage/hero";
import HomeFlowarts from "components/templates/homepage/flowarts";
import HomeGraphicDesign from "components/templates/homepage/graphicDesign";
import HomeWebDevelopment from "components/templates/homepage/webDevelopment";
import HomeContact from "components/templates/homepage/contact";

// FC
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Oh hai <3 Neffrey"}</title>
        <meta name="description" content="Oh hai <3 Neffrey" />
        <link rel="icon" href="/CircleLogoIco.ico" />
      </Head>

      <main
        className="flex min-h-screen flex-col items-center justify-center"
        style={{ scrollBehavior: "smooth" }}
      >
        <HomeHero />
        <HomeAbout />
        <HomeFlowarts />
        <HomeGraphicDesign />
        <HomeWebDevelopment />
        <HomeContact />
      </main>
    </>
  );
};

export default Home;

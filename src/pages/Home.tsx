import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";

import { ScrollProgress } from "../components/ScrollProgress";
import Divider from "../components/Divider";
import ProjectSlider from "../components/ProjectSlider";

const LazyBannerQuote = lazy(() => import("../components/BannerQuote"));
const LazySiteBarRight = lazy(() => import("../components/SideBarRight"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));
const LazyTechStack = lazy(() => import("../components/TechStack"));
const LazyAboutMe = lazy(() => import("../components/AboutMe"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-screen">
          <ScrollProgress
            position={"left"}
            color={"orange"}
            height={10}
            smoothness={true}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazySiteBarLeft />
            <LazyHeaderIntro />
            <LazySiteBarRight />
          </Suspense>
        </header>
        <main className="relative">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyBannerQuote
              style={"withBG"}
              quoteIndex={0}
              containerType="quote"
            />
            <Divider
              thickness="0.25rem"
              direction="outer-right-to-inner-left"
              color="lightblue"
              height="small"
              dividerStyle="solid"
            />

            <LazyTechStack />
            <Divider
              thickness="0.25rem"
              direction="inner-right-to-middle"
              color="lightblue"
              height="middle"
              dividerStyle="solid"
            />
            <LazyBannerQuote
              style={"noBG"}
              quoteIndex={1}
              containerType="statement"
            />
            <Divider
              thickness="0.25rem"
              direction="middle"
              color="lightblue"
              height="extraLarge"
              dividerStyle="solid"
            />
            <ProjectSlider />
            <div className="relative -mb-24 pb-32 -mt-10">
              <Divider
                thickness="0.25rem"
                direction="middle-to-inner-left"
                color="lightblue"
                height="middle"
                dividerStyle="solid"
              />

              <LazyAboutMe />
              <Divider
                thickness="0.25rem"
                direction="middle"
                color="lightblue"
                height="large"
                dividerStyle="solid"
              />

              <LazyContact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;

// library
import React, { Fragment } from "react";

// components
import HeroBox from "../common/HeroBox";
import SplashImage from "../common/SplashImage";
import Footer from "../layout/Footer";
import HeroPhones from "../features/HeroPhones";
import SubHeading from "../common/SubHeading";
import HomeContent from "../features/HomeContent";

const Home = () => {
  return (
    <Fragment>
      <HeroBox />
      <HeroPhones />
      <SubHeading />
      <HomeContent />
      <SplashImage />
      <Footer />
    </Fragment>
  );
};

export default Home;

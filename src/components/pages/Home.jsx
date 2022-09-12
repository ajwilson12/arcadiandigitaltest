// library
import React, { Fragment } from "react";

// components
import HeroBox from "../features/HeroBox";
import SplashImage from "../common/SplashImage";
import Footer from "../layout/Footer";
import HeroPhones from "../features/HeroPhones";
import SubHeading from "../common/SubHeading";
import HomeContent from "../features/HomeContent";

const Home = (props) => {
  return (
    <Fragment>
      <HeroBox clientWidth={props.clientWidth} />
      <HeroPhones />
      <SubHeading />
      <HomeContent />
      <SplashImage clientWidth={props.clientWidth} />
      <Footer />
    </Fragment>
  );
};

export default Home;

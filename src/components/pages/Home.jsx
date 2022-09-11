// library
import React, { Fragment } from "react";
// styles
import styles from "./Home.module.scss";
// components
import HeroBox from "../common/HeroBox";
import ContentBox from "../common/ContentBox";
import SplashImage from "../common/SplashImage";
import Footer from "../layout/Footer";
import HeroPhones from "../features/HeroPhones";
import SubHeading from "../common/SubHeading";

const Home = () => {
  return (
    <Fragment>
      <HeroBox />
      <HeroPhones />
      <SubHeading />
      <ContentBox direction="ltr" />
      <ContentBox direction="rtl" />
      <ContentBox direction="ltr" />
      <SplashImage />
      <Footer />
    </Fragment>
  );
};

export default Home;

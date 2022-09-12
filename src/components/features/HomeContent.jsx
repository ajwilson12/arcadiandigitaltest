import React, { Fragment } from "react";

import ContentBox from "../common/ContentBox";

import { ReactComponent as PhoneSection1 } from "../../assets/img/phoneSection1.svg";
import { ReactComponent as PhoneSection2 } from "../../assets/img/phoneSection2.svg";
import { ReactComponent as PhoneSection3 } from "../../assets/img/phoneSection3.svg";

const HomeContent = () => {
  return (
    <Fragment>
      <ContentBox
        direction="ltr"
        label="Create an account"
        subHeading="Create/login to an existing
                  account to get started"
        text="An account is created with your email
            and a desired password"
        picture={<PhoneSection1 title="application demo on phone" />}
      />
      <ContentBox
        direction="rtl"
        label="Explore varieties"
        subHeading="Shop for your favorites
        meal and enjoy hot."
        text="Shop for your favorite meals or drinks
        and enjoy while doing it."
        picture={<PhoneSection2 title="application demo on phone" />}
      />
      <ContentBox
        direction="ltr"
        label="Checkout"
        subHeading="When you're done check out
        and get it delivered."
        text="When you done check out and get it 
        delivered with ease."
        picture={<PhoneSection3 title="application demo on phone" />}
      />
    </Fragment>
  );
};

export default HomeContent;

// library
import React, { useState, useEffect, useRef, Fragment } from "react";

// styles
import styles from "./Navigation.module.scss";

// images
import { ReactComponent as Logo } from "../../assets/logos/Bella_Olonje_logo.svg";
import MobileMenuSwitch from "../features/MobileMenuSwitch.";

const Navigation = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [toggleMenu, setToggleMenu] = useState("false");
  const ref = useRef(null);

  useEffect(() => {
    // find nav bar height

    // if (props.clientWidth >= 1124) {
    //   setShowMobileMenu(false);
    // }

    setNavHeight(ref?.current.clientHeight);
    const root = document.documentElement;
    root?.style.setProperty("--nav-height", `${navHeight}px`);
  }, [navHeight, ref.current?.clientHeight, props.clientWidth]);

  // toggle menu function

  const toggleMobileMenu = () => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
      setToggleMenu("false");
    } else {
      setShowMobileMenu(true);
      setToggleMenu("true");
    }
  };

  return (
    <Fragment>
      <div className={styles.spacer} style={{ height: `${navHeight}px` }}></div>
      <nav className={styles.navigation} ref={ref}>
        <div className={styles.navElements}>
          <div className={styles.navLogo}>
            <Logo title="navigation logo" />
          </div>
          <div
            className={styles.mobileMenuSwitch}
            onClick={() => {
              toggleMobileMenu();
            }}
          >
            <div>
              <MobileMenuSwitch close={toggleMenu} />
            </div>
          </div>
        </div>
        <div
          className={styles.navList}
          style={
            showMobileMenu
              ? { right: "0%", background: "#ffffff" }
              : { right: "-100%", background: "#ffffff30" }
          }
        >
          <div className={styles.navItem}>
            <p>Home</p>
          </div>
          <div className={styles.navItem}>
            <p>Product</p>
          </div>
          <div className={styles.navItem}>
            <p>FAQ</p>
          </div>
          <div className={styles.navItem}>
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;

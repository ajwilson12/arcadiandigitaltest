// library
import React, { useState, useEffect, useRef, Fragment } from "react";

// styles
import styles from "./Navigation.module.scss";

// images
import { ReactComponent as Logo } from "../../assets/logos/Bella_Olonje_logo.svg";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // find nav bar height
    setNavHeight(ref?.current.clientHeight);
    const root = document.documentElement;
    root?.style.setProperty("--nav-height", `${navHeight}px`);
  }, [navHeight, ref.current?.clientHeight]);

  // toggle menu function

  const toggleMobileMenu = () => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
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
          <div className={styles.mobileMenuSwitch}>
            <div
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              MENU
            </div>
          </div>
        </div>
        <div
          className={styles.navList}
          style={showMobileMenu ? { right: "0%" } : { right: "-100%" }}
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

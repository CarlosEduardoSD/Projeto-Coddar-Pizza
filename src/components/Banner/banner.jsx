import React, { useState } from "react";
import styles from "../Banner/banner.module.css";

import Apple from "../../assets/img/Apple.svg";
import PlayStore from "../../assets/img/PlayStore.svg";
// import Pizza from "../../assets/img/pizza.png";
import BannerButtonErivax from "../Banner/BannerButtonErivax";

export default function Banner() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.banner_img}>
              <h1 className={styles.banner_title}>Pegue Uma Fatia</h1>
              <button className={styles.banner_apple_download}>
                <img
                  className={styles.banner_apple_icon}
                  src={Apple}
                  alt="Apple"
                  style={{ backgroundColor: "transparent" }}
                />

                <div
                  style={{
                    display: "flex",
                    backgroundColor: "transparent",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "10px",
                      justifyContent: "space-between",
                      margin: "0",
                    }}
                  >
                    Download on the
                  </p>
                  <p
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "16px",
                      fontWeight: "500",
                      margin: "0",
                    }}
                  >
                    App Store
                  </p>
                </div>
              </button>
              <button className={styles.banner_playstore_download}>
                <img
                  className={styles.banner_playstore_icon}
                  src={PlayStore}
                  alt="Play Store"
                  style={{ backgroundColor: "transparent" }}
                />

                <div
                  style={{
                    display: "flex",
                    backgroundColor: "transparent",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "10px",
                      justifyContent: "space-between",
                      margin: "0",
                    }}
                  >
                    Download on the
                  </p>
                  <p
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "16px",
                      fontWeight: "500",
                      margin: "0",
                    }}
                  >
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

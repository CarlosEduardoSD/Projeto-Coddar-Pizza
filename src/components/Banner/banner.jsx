import React from "react";
import styles from "../Banner/banner.module.css";

import Apple from "../../assets/img/Apple.svg";
import PlayStore from "../../assets/img/PlayStore.svg";
// import Pizza from "../../assets/img/pizza.png";

export default function Banner() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className={styles.banner_title}>Pegue Uma Fatia</h1>
            <div className={styles.banner_img}></div>
          </div>
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
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  backgroundColor: "transparent",
                  fontSize: "10px",
                  justifyContent: "space-between",
                  position: "relative",
                  marginTop: "8px",
                }}
              >
                Download on the
              </p>
              <p
                style={{
                  backgroundColor: "transparent",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginTop: "21px",
                  position: "absolute",
                  marginRight: "12px",
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
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  backgroundColor: "transparent",
                  fontSize: "10px",
                  justifyContent: "space-between",
                  position: "relative",
                  marginTop: "8px",
                }}
              >
                Download on the
              </p>
              <p
                style={{
                  backgroundColor: "transparent",
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "21px",
                  position: "absolute",
                }}
              >
                Google Play
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

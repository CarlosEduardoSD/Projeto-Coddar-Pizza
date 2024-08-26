import React from "react";
import styles from "./header.module.css";

import Hamburger from "../../assets/img/hamburger.svg";
import Perfil from "../../assets/img/ft_perfil.jpg";
// import bag from "../assets/img/bag.svg";

import { FaCartArrowDown } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "20px" }}>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className={styles.header_title}>CODAR PIZZARIA</h1>
          </div>
          <div
            className="col-md-8"
            style={{ display: "flex", justifyContent: "flex-start" }}
            // style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className={styles.header_sidebar}>
              <button
                class="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                style={{ backgroundColor: "#ef4c00", color: "white" }}
              >
                <img
                  className="img-fluid"
                  src={Hamburger}
                  alt="Menu"
                  style={{ backgroundColor: "transparent" }}
                />
              </button>
              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
                style={{ width: "50%" }}
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Menu
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <ul className={styles.header_menu_responsive}>
                    <li>
                      <a href="#search">Buscar</a>
                    </li>
                    <li>
                      <a href="#about">Sobre</a>
                    </li>
                    <li>
                      <a href="#function">Como Funciona</a>
                    </li>
                    <li>
                      <a href="#plans">Planos</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.header_responsive}>
              <ul className={styles.header_menu_list}>
                <li>
                  <a href="#search">Buscar</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#function">Como Funciona</a>
                </li>
                <li>
                  <a href="#plans">Planos</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
              <div className={styles.home_img}>
                <img className="img" src={Perfil} alt="Foto Perfil" />
                {/* img classname="img-fluid" */}
              </div>
              <div
                className={styles.divider_vertical}
                style={{
                  width: "1px",
                  backgroundColor: "#2E4765",
                  opacity: "0.2",
                }}
              ></div>
              <div className={styles.button}>
                <a href="#cart" className={styles.button_cart}>
                  <FaCartArrowDown
                    style={{
                      color: "#ffffff",
                      backgroundColor: "transparent",
                      width: "23px",
                      height: "20px",
                    }}
                  />
                  <p>(5) Item</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.divider_horizontal}
        style={{
          height: "1px",
          backgroundColor: "#2E4765",
          marginTop: "15px",
          opacity: "0.2",
        }}
      ></div>
    </>
  );
}

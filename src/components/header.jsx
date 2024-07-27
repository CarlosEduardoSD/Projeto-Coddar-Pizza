import React from "react";
import styles from "./header.module.css";

import Perfil from "../assets/img/ft_perfil.jpg";
import bag from "../assets/img/bag.svg";

import { FaCartArrowDown } from "react-icons/fa6";

export default function header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "20px" }}>
          <div
            className="col-md-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h1 className={styles.header_title}>CODAR PIZZARIA</h1>
          </div>
          <div
            className="col-md-8"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* <div className={styles.header_text}> */}
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
              <img className="img-fluid" src={Perfil} alt="Foto Perfil" />
            </div>
            <div
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
      <div
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

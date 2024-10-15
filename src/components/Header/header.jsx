import React from "react";
import styles from "./header.module.css";

// import Hamburger from "../../assets/img/hamburger.svg";
import Perfil from "../../assets/img/Perfil.png";
// import bag from "../assets/img/bag.svg";

import { FaCartArrowDown } from "react-icons/fa6";

import Cookies from 'js-cookie';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h1
            className={styles.header_title}
            href="/"
            style={{ cursor: "pointer" }}
            onClick={() => window.location.reload()}
          >
            Codar Pizzaria
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#ef4c00", marginTop: "10px" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "#ef4c00" }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginTop: "12px", marginLeft: "25vh" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`${styles.menu_link} ${styles.cart}`}
                  aria-current="page"
                  href="#"
                >
                  Perfil
                  <img
                    className={styles.sidebar_img}
                    src={Perfil}
                    alt="Foto"
                    style={{
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                    }}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.menu_link} aria-current="page" href="#">
                  Buscar
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.menu_link} aria-current="page" href="#">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.menu_link} aria-current="page" href="#">
                  Como Funciona
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.menu_link} aria-current="page" href="#">
                  Planos
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.menu_link} aria-current="page" href="#">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.menu_link} ${styles.cart}`}
                  aria-current="page"
                  href="#"
                >
                  Carrinho
                </a>
              </li>
            </ul>
            <div className={styles.button_area} id="#navbarNav">
              <div className="dropdown">
                <button
                  className="btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0px", border: "none" }}
                >
                  <div className={styles.home_img}>
                    <img className="img-fluid" src={Perfil} alt="Foto Perfil" />
                  </div>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" onClick={() => {Cookies.remove('token'), window.location.reload()}} style={{ cursor: "pointer" }}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className={styles.divider_vertical}
                style={{
                  width: "1px",
                  backgroundColor: "#2E4765",
                  opacity: "0.2",
                  height: "50px",
                  margin: "0 15px",
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
      </nav>
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

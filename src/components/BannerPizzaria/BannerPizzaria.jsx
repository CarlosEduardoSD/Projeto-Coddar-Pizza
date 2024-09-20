import React, { useState } from "react";
import styles from "./BannerPizzaria.module.css";

export default function BannerPizzaria({ loja }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.banner_pizzaria}>
              <div className={styles.bannerpizza_img} style={{ backgroundImage: `url(${loja.img_apresentacao})` }}>
                <h1 className={styles.banner_title}>{loja.nome}</h1>
                <p className={styles.banner_text}>
                  Onde o sabor fala com o seu paladar
                </p>
                <p className={styles.banner_description}>
                  Aberto Agora <strong style={{backgroundColor: "transparent", color: "#8A98BA", fontWeight: "500"}}>horário</strong> {loja.horario}
                </p>
                <div className={styles.banner_description_type_container}>
                  <p className={styles.banner_description_type}>{loja.tipo}</p>
                  <p className={styles.banner_description_type}>{loja.tamanho}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.button_container}>
              <button className={styles.button_click}>Clique Aqui</button>
              <button className={styles.button_back}>Voltar</button>
            </div> */}
        </div>
      </div>
    </>
  );
}

import React from "react";
import styles from "./BannerPizzaria.module.css";

export default function BannerPizzaria() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.banner_pizzaria}>
              <div className={styles.bannerpizza_img}>
                <h1 className={styles.banner_title}>Pizzaria Erivax</h1>
                <p className={styles.banner_text}>
                  Onde o sabor fala com o seu paladar
                </p>
                <p className={styles.banner_description}>
                  Aberto Agora horário 18:30 a 23:00
                </p>
                <div className={styles.banner_decription_type_2}>
                  <p className={styles.banner_description_type}>Italiana</p>
                  <p className={styles.banner_description_type}>Broto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

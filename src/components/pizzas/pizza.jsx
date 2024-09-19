import React from "react";
import styles from "../pizzas/pizza.module.css";

import saborDaCasaImg from "../../assets/img/sabor_casa.png";
import calabresaImg from "../../assets/img/calabresa.png";
import doceImg from "../../assets/img/doce.png";
import pepperoniImg from "../../assets/img/pepperoni.png";
import margueritaImg from "../../assets/img/marguerita.png";

import PizzaButton from "./pizzaButton";

export default function Pizza() {
  const items = [
    { name: "Pizza sabor da casa", img: saborDaCasaImg },
    { name: "Pizza calabresa", img: calabresaImg },
    { name: "Pizza doce", img: doceImg },
    { name: "Pizza pepperoni", img: pepperoniImg },
    { name: "Pizza marguerita", img: margueritaImg },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.cardapio_title}>
              <h4>Nosso Cardápio</h4>
            </div>
          </div>
          <div className={styles.pizza_container}>
            {items.map((item, index) => (
              <div className={styles.cardapio_wrapper} key={index}>
                <PizzaButton item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

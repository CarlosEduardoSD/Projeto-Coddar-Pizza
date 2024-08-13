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
    { name: "Sabor da Casa", img: saborDaCasaImg },
    { name: "Calabresa", img: calabresaImg },
    { name: "Doce", img: doceImg },
    { name: "Pepperoni", img: pepperoniImg },
    { name: "Marguerita", img: margueritaImg },
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
              <PizzaButton key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import styles from "../pizzas/pizza.module.css";

export default function PizzaButton({ item }) {
  return (
    <button className={styles.cardapio_item}>
      <img className={styles.pizza_img} src={item.img} alt="Pizza" />
      <p style={{ paddingLeft: '18px', borderRadius: "20px", margin: "0"}}>{item.name}</p>
    </button>
  );
}

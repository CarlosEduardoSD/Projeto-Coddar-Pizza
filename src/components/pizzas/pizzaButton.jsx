import React from "react";
import styles from "../pizzas/pizza.module.css";

export default function PizzaButton({ item }) {
  return (
    <button className={styles.cardapio_item}>
      <img className={styles.pizza_img} src={item.img} alt="Pizza" />
      {item.name}
    </button>
  );
}

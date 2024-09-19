import styles from "./lojas.module.css";

import { useState } from "react";

import { FaStar } from "react-icons/fa";

import pratoIcon from "../../assets/icons/pratoIcon.svg";

import coracaoPreenchido from "../../assets/icons/coracaopreenchido.svg";
import coracaoBorda from "../../assets/icons/coracaoborda.svg";
import clock from "../../assets/icons/clock.svg";

export default function LojasButton({ loja, onClick }) {
  const [favHeart, setFavHeart] = useState(false);

  return (
    <div className="col-md-4">
      <div className={styles.botaoImagem}>
        <div className={styles.imagemPizzaria1} style={{ backgroundImage: `url(${loja.img})` }}>
          <img src={pratoIcon} alt="" className={styles.pratoIcon}/>
        </div>
        <div style={{ margin: "12px 19px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className={styles.subtituloPizzaria1} style={{cursor: "pointer"}} onClick={onClick}>
              {loja.nome}
            </p>
              {favHeart ? (
                <img
                  onClick={() => setFavHeart(false)}
                  src={coracaoPreenchido}
                  className={styles.coracao}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => setFavHeart(true)}
                  src={coracaoBorda}
                  className={styles.coracao}
                  alt=""
                />
              )}
          </div>
          <p className={styles.avaliacoes1}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((item, index) => {
                return (
                  <label>
                    <input type="radio" />
                    <FaStar
                      size={19}
                      color="#EF4C00"
                      style={{ opacity: index < loja.estrelas ? 1 : 0.2 }}
                    />
                  </label>
                );
              })}
            </div>
            {loja.avaliacoes} Avaliações
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ gap: "9px", display: "flex" }}>
              <span className={styles.tipoPizza}>{loja.tipo}</span>
              <span className={styles.tipoPizza}>{loja.tamanho}</span>
            </div>
            <span className={styles.tempoPizza}>
              <img src={clock} className={styles.clock} alt="" /> {loja.tempo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

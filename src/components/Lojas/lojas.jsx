import styles from "../Lojas/lojas.module.css";

import LojaComponent from "./lojaComponet";

import imgMatex from "../../assets/img/pizzariamatexpequena.png";
import imgErivax from "../../assets/img/pizzariaerivaxpequena.png";
import imgCairo from "../../assets/img/pizzariacairopequena.png";

import imgCairoApresentacao from "../../assets/img/bannerpizza2.png"
export default function lojas({ onLojaClick }) {
  const lojas = [
    {
      id: 1,
      img: imgMatex,
      nome: "Pizzaria Matex",
      avaliacoes: 32,
      estrelas: 4,
      tipo: "Brasileira",
      tamanho: "Média",
      tempo: "20-30",
      horario: "18:30 a 23:00",
    },
    {
      id: 2,
      img: imgErivax,
      img_apresentacao: imgCairoApresentacao,
      nome: "Pizzaria Erivax",
      avaliacoes: 20,
      estrelas: 3,
      tipo: "Italiana",
      tamanho: "Broto",
      tempo: "10-20",
      horario: "18:00 a 23:00",
    },
    {
      id: 3,
      img: imgCairo,
      nome: "Pizzaria Cairo",
      avaliacoes: 45,
      estrelas: 5,
      tipo: "Italiana",
      tamanho: "Giga",
      tempo: "25-35",
      horario: "19:30 a 00:00",
    }
  ];
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div style={{display: "flex", justifyContent: "space-between"}}>
              <h4 className={styles.titulo}>
                Populares
              </h4>
              <hr className={styles.linha}></hr>
          </div>
          {lojas.map((loja) => (
             <LojaComponent key={loja.id} loja={loja} onClick={() => onLojaClick(loja)}/>
          ))}
        </div>
        <hr className={styles.linha2}></hr>
      </div>
    </>
  );
}
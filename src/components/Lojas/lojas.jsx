import styles from "../Lojas/lojas.module.css";

import LojaComponent from "./lojaComponet";

import imgMatex from "../../assets/img/pizzariamatexpequena.png";
import imgErivax from "../../assets/img/pizzariaerivaxpequena.png";
import imgCairo from "../../assets/img/pizzariacairopequena.png";
export default function lojas() {
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
    },
    {
      id: 2,
      img: imgErivax,
      nome: "Pizzaria Erivax",
      avaliacoes: 20,
      estrelas: 3,
      tipo: "Italiana",
      tamanho: "Broto",
      tempo: "10-20",
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
             <LojaComponent loja={loja}/>
          ))}
        </div>
      </div>
    </>
  );
}
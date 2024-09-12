import React from "react";
import styles from "../Lojas/lojas.module.css";

import coracaoPreenchido from "../../assets/icons/coracaopreenchido.svg";
import coracaoBorda from "../../assets/icons/coracaoborda.svg";
import clock from "../../assets/icons/clock.svg";

export  default function lojas(){
    return(
        <>
            <div className="container text-center">
                <div className="row">
                    <h4 className={styles.titulo}>Populares <div className={styles.linha}></div></h4>
                    <div className="col">
                        <div className={styles.botaoImagem}>
                                <div className={styles.imagemPizzaria1}>
                                </div>
                                <p className={styles.subtituloPizzaria1}>Pizzaria Matex <img src={coracaoPreenchido} className={styles.coracao} alt="" /></p>
                                <p className={styles.avaliacoes1}><span className={styles.estrelas} >&#9733;&#9733;&#9733;&#9733;&#9733;</span> 32 avaliações</p>
                                <div>
                                    <span className={styles.tipoPizza}>Brasileira</span>
                                    <span className={styles.tipoPizza}>Média</span>
                                    <span className={`${styles.tipoPizza}${styles.tempoPizza}`}><img src={clock} className={styles.clock}  alt="" /> 20-30</span>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.botaoImagem}>
                                <div className={styles.imagemPizzaria2}>
                                </div>
                            <div>
                                <p>Pizzaria Erivax <img src={coracaoBorda} className={styles.coracao} alt="" /></p>
                                <p className={styles.avaliacoes1}><span className={styles.estrelas} >&#9733;&#9733;&#9733;&#9733;&#9733;</span> 20 avaliações</p>
                                <div>
                                    <span className={styles.tipoPizza}>Italiana</span>
                                    <span className={styles.tipoPizza}>Broto</span>
                                    <span className={`${styles.tipoPizza}${styles.tempoPizza}`}><img src={clock} className={styles.clock}  alt="" /> 10-20</span>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="col">
                        <div className={styles.botaoImagem}>
                                <div className={styles.imagemPizzaria3}>
                                </div>
                            <div>
                                <p>Pizzaria Cairo <img src={coracaoPreenchido} className={styles.coracao} alt="" /></p>
                                <p className={styles.avaliacoes1}><span className={styles.estrelas} >&#9733;&#9733;&#9733;&#9733;&#9733;</span> 45 avaliações</p>
                                <div>
                                <div>
                                    <span className={styles.tipoPizza}>Italiana</span>
                                    <span className={styles.tipoPizza}>Giga</span>
                                    <span className={`${styles.tipoPizza}${styles.tempoPizza}`}><img src={clock} className={styles.clock}  alt="" /> 25-35</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
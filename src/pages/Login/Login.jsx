import React, { useState } from "react";
import styles from "./Login.module.css";
import appleicone from "../../assets/icons/AppleIcon.svg";
import googleicone from "../../assets/icons/PlayStoreIcon.svg";
import { api } from "../../lib/api";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      senha,
    };
    // console.log(loginData);
    try {
      const response = await api.post("/login", loginData);
      const idUser = response.data.user.id;
      if (response.status === 200) {
        localStorage.setItem("token", idUser);
        Cookies.set("token", idUser, { expires: 7 });
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Erro de login:", error);
    }
  };

  return (
    <div className={styles.bodyLogin}>
      <div className={styles.pageLogin}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.loginTitulo}>
                <div className={styles.loginTituloTopo}>
                  <h1>Codar Pizzaria</h1>
                  <h2>Pegue uma fatia</h2>
                </div>

                <div className={styles.loginIcones}>
                  <button className={styles.loginDownloadApple}>
                    <img
                      className={styles.iconeApple}
                      src={appleicone}
                      alt=""
                    />
                    <div className={styles.textosApple}>
                      <p className={styles.textoApple1}>Download on the</p>
                      <p className={styles.textoApple2}>App Store</p>
                    </div>
                  </button>

                  <button className={styles.loginDownloadGoogle}>
                    <img
                      className={styles.iconeGoogle}
                      src={googleicone}
                      alt=""
                    />
                    <div className={styles.textosGoogle}>
                      <p className={styles.textoGoogle1}>Get it on</p>
                      <p className={styles.textoGoogle2}>Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles.loginParte2}>
                <h2>Efetuar Login</h2>
                <hr />
                <span className={styles.loginLinha}></span>

                <form className={styles.formularioBox} onSubmit={handleSubmit}>
                  <div className={styles.inputBoxPrincipal}>
                    <div className={styles.loginInputBox}>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.loginInputBox}>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.senha}>
                    <a href="#">Esqueceu sua senha?</a>
                    <br />
                  </div>
                  <button type="submit" className={styles.botaoBox}>
                    Acessar
                  </button>
                  <br />

                  <div className={styles.conta}>
                    <a href="/register">Criar uma conta</a>
                  </div>
                </form>
                <div className={styles.loginFooter}>
                  <p>Codar Pizzaria 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

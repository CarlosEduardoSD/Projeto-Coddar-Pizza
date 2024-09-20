import styles from "./RegisterPage.module.css";

import AppleIcon from "../../assets/icons/AppleIcon.svg";
import GooglePlayIcon from "../../assets/icons/PlayStoreIcon.svg";

import axios from "axios";

import { useState } from "react";
function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui poderia ser feito a lógica para registrar o usuário
    if (password === confirmPassword) {
      const userData = {
        name: name,
        email: email,
        password: password,
      };

      axios
        .post("http://localhost:3000/register", userData)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    } else {
      alert("As senhas não correspondem");
    }
  };

  return (
    <div className={styles.body_register}>
      <div className={styles.register}>
        <div className="container">
          <div className="row">
            <div className="col-md-6" >
              <div className={styles.register_first_part}>
                <div
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <h1
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    Codar Pizzaria
                  </h1>
                  <h2
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    Pegue uma fatia
                  </h2>
                </div>
                <div className={styles.register_icons}>
                  <button className={styles.register_download_Apple}>
                    <img
                      src={AppleIcon}
                      style={{ backgroundColor: "transparent" }}
                    />
                    <div style={{ backgroundColor: "transparent" }}>
                      <p
                        style={{
                          backgroundColor: "transparent",

                          fontSize: "11px",
                          margin: "0",
                        }}
                      >
                        Dowload on the
                      </p>
                      <p
                        style={{
                          backgroundColor: "transparent",
                          fontSize: "16px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                      >
                        App Store
                      </p>
                    </div>
                  </button>

                  <button className={styles.register_download_Google}>
                    <img
                      src={GooglePlayIcon}
                      style={{ backgroundColor: "transparent" }}
                    />
                    <div
                      style={{
                        backgroundColor: "transparent",
                        textAlign: "start",
                      }}
                    >
                      <p
                        style={{
                          backgroundColor: "transparent",
                          margin: "0",
                          fontSize: "11px",
                        }}
                      >
                        Get in on
                      </p>
                      <p
                        style={{
                          backgroundColor: "transparent",
                          margin: "0",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Google Play
                      </p>
                    </div>

                    {/* <div className="register-Google">
                    </div>
                    <div className="register-download-google">
                      <p className="get-it-on">Get it on </p>

                      <p className="GooglePlay">Google Play</p>
                    </div> */}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.register_second_part}>
                <h2>CADASTRAR-SE</h2>
                <hr></hr>
                <span className={styles.regular}></span>
                <form onSubmit={handleSubmit}>
                  <div className={styles.register_input_box}>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome completo"
                      autoFocus
                      required
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div className={styles.register_input_box}>
                    <input
                      type="email"
                      name="e-mail"
                      placeholder="E-mail"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>

                  <div className={styles.register_input_box}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className={styles.register_input_box}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirmar Senha"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </div>
                </form>

                <button className={styles.register_button} type="submit">
                  Registrar-se
                </button>

                <div className={styles.register_footer}>
                  <p>Codar Pizzaria 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

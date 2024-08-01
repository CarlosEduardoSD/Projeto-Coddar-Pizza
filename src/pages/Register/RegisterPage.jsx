import "./RegisterPage.css";
// import AppleIcon from "./../../assets/icons/icons-apple.png";
// import GooglePlayIcon from "./../../assets/icons/icons-google-play.png";
import AppleIcon from "../../assets/icons/AppleIcon.svg";
import GooglePlayIcon from "../../assets/icons/PlayStoreIcon.svg";
function RegisterPage() {
  return (
    <div className="body-register">
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="register-first-part">
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
                <div className="register-icons">
                  <button className="register-download-Apple">
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
                    {/* <div className="register-Apple">
                      <div className="register-download">
                        <p className="download-on-the">Download on the </p>
                        <p className="AppStore"> App Store</p>
                      </div>
                    </div> */}
                  </button>

                  <button className="register-download-Google">
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
              <div className="register-second-part">
                <h2>CADASTRAR-SE</h2>
                <hr></hr>
                <span className="regular"></span>
                <form>
                  <div className="register-input-box">
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome completo"
                      autoFocus
                      required
                    ></input>
                  </div>
                  <div className="register-input-box">
                    <input
                      type="email"
                      name="e-mail"
                      placeholder="E-mail"
                      required
                    ></input>
                  </div>

                  <div className="register-input-box">
                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                    ></input>
                  </div>
                  <div className="register-input-box">
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirmar Senha"
                    ></input>
                  </div>
                </form>

                <button className="register-button">Registrar-se</button>

                <div className="register-footer">
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

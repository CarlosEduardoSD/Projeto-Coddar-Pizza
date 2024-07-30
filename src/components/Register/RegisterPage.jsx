import "./RegisterPage.css";
import AppleIcon from "./../../assets/icons/icons-apple.png";
import GooglePlayIcon from "./../../assets/icons/icons-google-play.png";
function RegisterPage() {
  return (
    <div className="body-register">
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="register-first-part">
                <h1>Codar Pizzaria </h1>
                <h2>Pegue uma fatia</h2>

                <div className="col-md-12">
                  <div className="register-icons">
                    <button className="register-download-Apple">
                      <div className="register-Apple">
                        <div className="">
                          <img
                            src={AppleIcon}
                            className="register-AppleIcon"
                          ></img>
                        </div>
                        <div className="register-download">
                          <p className="download-on-the">Download on the </p>

                          <p className="AppStore"> App Store</p>
                        </div>
                      </div>
                    </button>

                    <button className="register-download-Google">
                      <div className="register-Google">
                        <img
                          src={GooglePlayIcon}
                          className="register-GoogleIcon"
                        ></img>
                      </div>
                      <div className="register-download-google">
                        <p className="get-it-on">Get it on </p>

                        <p className="GooglePlay">Google Play</p>
                      </div>
                    </button>
                  </div>
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
                      type=""
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

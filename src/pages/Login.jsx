import React from 'react';
import styles from './Login.module.css';
import appleicone from '../assets/icons/AppleIcon.svg';
import googleicone from '../assets/icons/PlayStoreIcon.svg';

const Login = () => {
    return (
        <div className={styles.bodyLogin}>
            <div className={styles.pageLogin}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className={styles.loginTitulo}>
                                <div>
                                    <h1>Codar Pizzaria</h1>
                                    <h2>Pegue uma fatia</h2>
                                </div>
                                
                                    <div className={styles.loginIcones}>
                                        <button className={styles.loginDownloadApple}>
                                            <img src={appleicone} alt="" />
                                            <div className={styles.textosApple}> 
                                                <p className={styles.textoApple1}>Download on the</p>
                                                <p className={styles.textoApple2}>App Store</p> 
                                            </div>  
                                        </button>                                       

                                        <button className={styles.loginDownloadGoogle}>
                                        <img src={googleicone} alt="" />
                                            <div className={styles.textosGoogle}> 
                                                <p className={styles.textoGoogle1}>Get it on</p>
                                                <p className={styles.textoGoogle2}>Google Play</p> 
                                            </div>
                                        </button>
                                                                          

                                    </div>
                                
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className={styles.loginParte2}>
                                <h2>Efetuar Login</h2>
                                <hr />
                                <span className={styles.loginLinha}></span>

                                <form className={styles.formularioBox} action="">
                                    <div className={styles.loginInputBox}>
                                        <input type="email" name="email" id="email" placeholder='E-mail'  required />
                                    </div>
                                    <div className={styles.loginInputBox}>
                                        <input type="password" name="password" id="password" placeholder='Senha' required />
                                    </div>
                                    <div className={styles.senha}>
                                        <a href="#">Esqueceu sua senha?</a><br />
                                    </div>
                                    <button className={styles.botaoBox}>Acessar</button><br />
                                    
                                    <div className={styles.conta}>
                                        <a href="">Criar uma conta</a>
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
    )
  };

export default Login
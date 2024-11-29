import { useRef, useState } from "react";
import styles from './Login.module.css';
import appleicone from '../../assets/icons/AppleIcon.svg';
import googleicone from '../../assets/icons/PlayStoreIcon.svg';

import Cookies from "js-cookie";

import { api } from "../../lib/api";
import { z } from "zod";

function Login() {
    const [errors, setErrors] = useState({ email: "", senha: ""});
    
    const email = useRef();
    const senha = useRef();
    
    //Criando o schema de validação
    const schemaValidation = z.object({
        email: z.string().email("E-mail invalido"),
        senha: z.string().min(5, "Senha precisa ter no mínimo 5 caracteres"),
    }); //Armazenamento dos dados

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {
            email: email.current.value,
            senha: senha.current.value,
          };
        
          const validation = schemaValidation.safeParse(loginData);  //safeParse = colocar os dados que sao validados 
          if(!validation.success){
            
            const errorMessages = {};
            validation.error.issues.forEach((issue) => {
                errorMessages[issue.path[0]] = issue.message;
            });
            setErrors(errorMessages);
            return;
          } else {
            setErrors({ email: "", senha: ""});
          }
   
        // Enviar dados de login para a API
        const response = await api.post("/login", loginData);
        console.log(response);
        
        if (response.status === 200) {
          // Armazenar o token nos cookies e no armazenamento local
          Cookies.set("token", response.data.id, {
            expires: 7, // 7 dias
            path: "/",
          });
          localStorage.setItem("chave", response.data.id);
          
          
          // Redirecionar após 2 segundos
          setTimeout(() => {
            window.location.href = '/';
          }, 2000 /*2 segundos*/);
        } 
        //else {
        //   alert("Falha ao fazer login. Verifique suas credenciais.");
        // }
      };
  



    return (
        <div className={styles.bodyLogin}>
            <div className={styles.pageLogin}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className={styles.loginTitulo}>
                                <div className={styles.loginTituloTopo}>
                                    <h1>Codar Pizzaria</h1>
                                    <h2>Pegue uma fatia</h2>
                                </div>
                                
                                    <div className={styles.loginIcones}>
                                        <button className={styles.loginDownloadApple}>
                                            <img className={styles.iconeApple} src={appleicone} alt="" />
                                            <div className={styles.textosApple}> 
                                                <p className={styles.textoApple1}>Download on the</p>
                                                <p className={styles.textoApple2}>App Store</p> 
                                            </div>  
                                        </button>                                       

                                        <button className={styles.loginDownloadGoogle}>
                                        <img className={styles.iconeGoogle} src={googleicone} alt="" />
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

                                <form onSubmit={handleSubmit} className={styles.formularioBox} action="">
                                    <div className={styles.inputBoxPrincipal}>
                                        <div className={styles.loginInputBox}>
                                            <input type="text" name="email" id="email" placeholder='E-mail' ref={email}/>
                                            {errors.email && (
                                                <p className={styles.errorMessages}>{errors.email}</p>
                                            )}
                                        </div>
                                        <div className={styles.loginInputBox}>
                                            <input type="password" name="password" id="password" placeholder='Senha' ref={senha}/>
                                            {errors.senha && (
                                                <p className={styles.errorMessages}>{errors.senha}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className={styles.senha}>
                                        <a href="#">Esqueceu sua senha?</a><br />
                                    </div>
                                    <button className={styles.botaoBox}>Acessar</button><br />
                                    
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
    )
  }

export default Login;
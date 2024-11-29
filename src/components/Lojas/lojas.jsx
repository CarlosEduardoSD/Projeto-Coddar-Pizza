import styles from "../Lojas/lojas.module.css";
import LojaComponent from "./lojaComponet";
import { useState } from "react";
import React from "react";
import { api } from "../../lib/api";
import LojaComponet from "./lojaComponet";


export default function Lojas({ onLojaClick }) {
    const [executed, setExecuted] = React.useState(false);
    const [data, setData] = React.useState([]);


      React.useEffect(() => {         
        async function getPizzaria() {
          try{
            if(!executed){
              const response = await api.get("/pizzaria");
              
              setData(response.data);
            }
          }catch(error){
            console.log(error);
          }
            
          } 
          // const fetchPromise = fetch("http://localhost:3000/pizzaria", {
          //   method: "GET",
          //   mode: "cors",
           
          // });
          
          // fetchPromise.then((response) => response.json())
          // .then((data)=> {
          //   console.log(data);
          // });
          
          

          getPizzaria();
          setExecuted(true);
      }, [executed]);
      
  
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
          {data.map((e) => (
             <LojaComponent key={e.id} loja={e} 
        onClick={() => onLojaClick(e)}/>
             
          ))}
          
        </div>
        <hr className={styles.linha2}></hr>
      </div>
    </>
  );
}
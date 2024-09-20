import Header from "../../components/Header/header";
import OurMenu from "../../components/Menu/OurMenu";
import Banner from "../../components/Banner/banner";
import BannerPizzaria from "../../components/BannerPizzaria/BannerPizzaria";
import Pizza from "../../components/pizzas/pizza";
import Lojas from "../../components/Lojas/lojas";

import { useState } from "react";

import { useState } from "react";

export default function Home() {
  const [lojaSelecionada, setLojaSelecionada] = useState(null);
  
  const handleClick = (loja) => {
    setLojaSelecionada(loja);
  };

  return (
    <>
      <Header />
      {lojaSelecionada ? (
        <>
          <BannerPizzaria loja={lojaSelecionada}/>
          <Pizza loja={lojaSelecionada}/>
        </>
      ) : (
        <>
          <Banner />
          <OurMenu />
          <Lojas onLojaClick={handleClick} />
        </>
      )}
    </>
  );
}

import Header from "../../components/Header/header";
import OurMenu from "../../components/Menu/OurMenu";
import Banner from "../../components/Banner/banner";
import BannerPizzaria from "../../components/BannerPizzaria/BannerPizzaria";
import Pizza from "../../components/pizzas/pizza";
import Lojas from "../../components/Lojas/lojas";

import Cookies from "js-cookie";

import { api } from "../../lib/api";

import { useState, useEffect } from "react";

export default function Home() {
  const [lojaSelecionada, setLojaSelecionada] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      const id = Cookies.get("token");
      const getUnique = await api.get(`/usuarios/${id}`);

      if (getUnique.data === null) {
        Cookies.remove("token");
        window.location.href = "/login";
      }
    };
    verifyUser();
  }, []);

  const handleClick = (loja) => {
    setLojaSelecionada(loja);
  };

  return (
    <>
      <Header />
      {lojaSelecionada ? (
        <>
          <BannerPizzaria loja={lojaSelecionada} />
          <Pizza loja={lojaSelecionada} />
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

import Header from "../../components/Header/header";
import OurMenu from "../../components/Menu/OurMenu";
import Banner from "../../components/Banner/banner";
import BannerPizzaria from "../../components/BannerPizzaria/BannerPizzaria";
import Pizza from "../../components/pizzas/pizza";
import Lojas from "../../components/Lojas/lojas"


export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <OurMenu />
    {/* <BannerPizzaria /> */}
    {/* <Pizza /> */}
    <Lojas />
    </>
  );
}

import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import AboutCompany from "../components/home/aboutCompany/AboutCompany";
import Advantages from "../components/home/advantages/Advantages";
import FirstScreen from "../components/home/firstScreen/FirstScreen";
import Investments from "../components/home/investments/Investments";
import Property from "../components/home/property/Property";

function Home() {
  return (
    <main>
      <Header />
      <FirstScreen />
      <AboutCompany />
      <Investments />
      <Property />
      <Advantages />
      <Footer />
    </main>
  );
}

export default Home;

import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import AboutCompany from "../components/home/aboutCompany/AboutCompany";
import Advantages from "../components/home/advantages/Advantages";
import Blog from "../components/home/blog/Blog";
import Contacts from "../components/home/contacts/Contacts";
import FirstScreen from "../components/home/firstScreen/FirstScreen";
import Investments from "../components/home/investments/Investments";
import Mortgage from "../components/home/mortgage/Mortgage";
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
      <Mortgage />
      <Contacts />
      <Blog />
      <Footer />
    </main>
  );
}

export default Home;

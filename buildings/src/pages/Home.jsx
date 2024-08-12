import Header from "../components/header/Header";
import FirstScreen from "../components/home/firstScreen/FirstScreen";
import Investments from "../components/home/investments/Investments";
import Property from "../components/home/property/Property";

function Home() {
  return (
    <main>
      <Header />
      <FirstScreen />
      <Investments />
      <Property />
    </main>
  );
}

export default Home;

import LandingPage from "./component/LandingPage";
import NavBar from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import Skill from "./component/Skill";
import SosMed from "./component/SosMed";
import Tentang from "./component/Tentang";

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Tentang />
      <Portfolio />
      <Skill />
      <SosMed />
    </div>
  );
}

export default App;

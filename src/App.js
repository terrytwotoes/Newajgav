import AboutUsDivWrapper from "./Components/AboutUsDiv/AboutUsDivWrapper";
import ContactUsDivWrapper from "./Components/ContactUsDiv/ContactUsDivWrapper";
import FooterDivWrapper from "./Components/FooterDiv/FooterDivWrapper";
import Navbar from "./Components/NavBarDiv/NavBar";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
function App() {
  return (
    <>
      <Navbar />
      <AboutUsDivWrapper />
      <SubNavBar />
      {/* <ContactUsDivWrapper /> */}
      <FooterDivWrapper />
    </>
  );
}

export default App;

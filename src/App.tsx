import Navbar from "./components/navbar";
import Home from "./components/home"
import About  from "./components/about";
import MyCompetence from "./components/competence";
import Projets from "./components/projet";
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar/>
      </div>
      <Home/>
      <About/>
      <div className="p-5 md:px-[15%]">
        <MyCompetence/>
        <Projets/>
      </div>
      
      <Footer/>
    </div>
  );

};

export default App

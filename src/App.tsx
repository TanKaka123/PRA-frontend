import "./App.scss";
import Header from "./components/header/header";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Follow from "./components/follow/follow";
import BeforeAndAfter from "./components/beforeAndAfter/beforeAndAter";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="distance">
        <About/>
      </div>
      <div className="distance">
        <BeforeAndAfter/>
      </div>
      <div className="distance">
        <Contact/>
      </div>
    
      <div className="distance">
        <Follow/>
      </div>
      <div className="distance">
        <Footer/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Fragments/Navbar/Index';
import Hero from './components/Layouts/Home/Index';
import gambar1 from './img/logo.png';
import background from './img/background.png';
import about from './img/about.png';
import About from './components/Layouts/About/Index';
import Services from './components/Layouts/Services/Index';
import Contact from './components/Layouts/Contact/Index';
import logo from './img/logo.png'
import icon1 from './img/twitter.png'
import icon2 from './img/facebook.png'
import icon3 from './img/linkedin.png'
import icon4 from './img/instagram.png'
import icon5 from './img/youtube.png'
import Footer from './components/Layouts/Footer/Index';
import Button from './components/Elements/Button/Index';

function App() {
  return (
    <div className="App w-full">
      <Navbar src={gambar1} />
      <Hero background={background}/>
      <About src={about} title="About" />
      <Services />
     <Contact/>
    <Footer logo={logo} icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} icon5={icon5} />
    </div>
  );
}

export default App;

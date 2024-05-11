import "./style.css";
import logoSenac from "./pic/logo.png"
import MenuBar from "./components/MenuBar";
import Router from "./Router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

function App() {


  return (
   <div className="body">
      <div className="corpo">
          <header className="cabecalho">
            <div className="logo">
              < img src={logoSenac} alt="logo" />
            </div>
            <MenuBar /> 
          </header>
      <Router />
      <div className="centered">
        <FaFacebook/>
        <FaInstagram/>
        <MdMarkEmailUnread/>
        </div>
      </div>
   </div>
   
  );
}

export default App;

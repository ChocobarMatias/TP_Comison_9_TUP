import "../../src/styles/Header.css"
import perfil from "../../src/assets/FOTO PERFIL.jpg"
import { useNavigate } from "react-router-dom";
import {LOGIN} from "../routers/HomePage.routes"
import { useAuthStore } from "../store/zunstand";

const Header = () => {
  const navigate = useNavigate();
const nombre = useAuthStore((state)=>state.nombre);
const Inicio = () => {
  navigate(LOGIN);
}



  return (
    <div>
      <div className="contenedorHeader">
        <div className="contenedorboton">
          <button className="botonHeader" onClick={Inicio}>Login</button>
        </div>
      </div>
      <div className="contenedorIMG">
        <img src={perfil} alt="perfil" className="imagen" />
        <br />
        <h2>Soy Chocobar Matias Sebastian</h2>
        <br /><br />
        <h3>Desarrollador Web Jr</h3>
        <br />
        <h3>Bienvenido {nombre}</h3>
      </div>
    </div>
  )
}

export default Header

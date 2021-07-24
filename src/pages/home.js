import React , {useState , useEffect , useContext} from 'react';
import {Link , withRouter} from "react-router-dom"
import axios from "axios"
import BarradeNavegacion from '../components/BarradeNavegacion'
import Auth from '../contexts/Auth'
import '../styles/home.css'
import M from "materialize-css"
import BOSQUES from "../img/bosque-01.jpg";
import BIODIVERCIDAD from "../img/biodi.jpg";
import LEYES from "../img/leyes-01.jpg";

const  Home = (props) => {
   const {isAuthentificated , setIsAuthentificated} = useContext(Auth)




   return(
        <div className = "body">
            <BarradeNavegacion/>

            <div className="contenedor-de-banner">
                <div className="contenido-banner container">
                    <div>
                        <h4></h4>
                    </div>
                    <div className="link-boton">
                        <Link to = "/iniciar" className="btn-small aparecer-back-boton">Inicia session</Link>
                        <Link to = "/iniciar" className="btn-small aparecer-back-boton">Danos tu punto de vista sobre ....</Link>
                        <Link to = "/iniciar" className="btn-small no-apareser-boton">Comparte tu proyecto de medio ambiente</Link>
                    </div>


                </div>
            </div>

            <div className="container">
                <div className="informacion-page-objetivo">
                    <p className="letra-objetivo">
                        esta pagina esta hecha para brindar informacion sobre la biodivercidad ,
                        sobre bosques de G.E y en esta pagina tambien podras compartir tus proyectos y 
                        tambien hay un blog en el que podras debatir diferentes temas del medio ambiente
                    </p>
                </div>
            </div>

            <div className ="container body-targetas">
                <div className ="contenedor-targetas">
                    <div className="targeta-100">
                        <div className="targetas">
                            <div className="img-targeta">
                                <img src={BOSQUES} alt="" />
                            </div>
                            <div className="link-targeta">
                                <Link to="/bosques">
                                sobre bosques de G.E y en esta pagina tambien podras compartir
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="targeta-100">
                        <div className="targetas">
                            <div className="img-targeta">
                                <img src={BIODIVERCIDAD} alt="" />
                            </div>
                            <div className="link-targeta">
                                <Link to="/biodiversidad">
                                    La biodiversidad de G.E
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="targeta-100">
                        <div className="targetas">
                            <div className="img-targeta">
                                <img src={LEYES} alt="" />
                            </div>
                            <div className="link-targeta">
                                <Link to="/leyes">
                                    Articulos y normas que protegen el medio ambiente
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )    

}

export default withRouter(Home) ;
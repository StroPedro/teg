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
import BlogImg from "../img/image-blog.jpg";

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
                        {isAuthentificated?"":
                        <Link to = "/iniciar" className="btn-small aparecer-back-boton">Inicia session</Link>
                        }
                        <Link to = "/preguntas" className="btn-small aparecer-back-boton">Danos tu punto de vista sobre ....</Link>
                        <Link to = "#" className="btn-small no-apareser-boton">Comparte tu proyecto de medio ambiente</Link>
                    </div>


                </div>
            </div>

            <div className="container">
                <div className="informacion-page-objetivo">
                    <p className="letra-objetivo">
                        esta pagina esta hecha para brindar informacion sobre la biodivercidad ,
                        y los bosques de G.E 
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
                                sobre bosques de G.E 
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
                                    biodiversidad de G.E
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
                                    Articulos y normas 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="targeta-100">
                        <div className="targetas">
                            <div className="img-targeta">
                                <img src={BlogImg} alt="" />
                            </div>
                            <div className="link-targeta">
                                <Link to="/preguntas">
                                    Visita nuestro blog
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <footer class="page-footer grey lighten-3">
            <div class="container  ">
                <div class="row">
                <div class="col l6 s12">
                    <h5 class="grey-text text-darken-4">Nota :</h5>
                    <p class="grey-text text-darken-4">Esta pagina aun esta en proceso de desarrollo</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="grey-text text-darken-4">Menu</h5>
                    <ul>
                    <li><Link class="green-text " to ="/preguntas">Blog</Link></li>
                    <li><Link class="green-text " to ="/bosques">Bosques de G.E</Link></li>
                    <li><Link class="green-text " to ="/biodiversidad">biodiversidad</Link></li>
                    <li><Link class="green-text " to ="/leyes">Leyes</Link></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container grey-text text-darken-4">
                © 2021 credo por pedro ndong todos los derechos reservados
                <a class="grey-text text-lighten-4 right" href="#!"></a>
                </div>
            </div>
            </footer>
        </div>
    )    

}

export default withRouter(Home) ;
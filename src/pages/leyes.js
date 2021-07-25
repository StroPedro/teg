import React ,{useEffect} from "react";
import BarradeNavegacion from '../components/BarradeNavegacion'
import {Link , withRouter} from 'react-router-dom'
import '../styles/biodi.css'
import bioImg2 from "../img/BOSSQUESS.jpg"
import elefante from "../img/loxodoxaafricana.jpg"
import bufalo from "../img/bufalo.jpg"
import cocodrilo from "../img/cocodrilo.jpg"
import antilope from "../img/antilope.jpg"
import mandril from "../img/mendriil.jpg"
import celobo from "../img/celobo-negro.jpg"
import hipopotamo from "../img/hipopotamo.jpg"
import gorilla from "../img/gorilla.jpg"
import  ilomba from "../img/elomba.png"
import okoume from "../img/okuome.jpg"
import tali from "../img/Erythrophleum-ivorense.jpg"
import azobe from "../img/azobe.jpg"

import M from "materialize-css"


const Leyes = (props) => {
useEffect(()=>{
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, options);
    });
}) 
return (
    
<div>
    <BarradeNavegacion/>

    <div className="container titulo-biodiversidad">
        <div className="titulo-bio-50 bioo">
            <h1> leyes que ayudan a proteger al sector bosque medio ambiente</h1>
        </div>
    </div>


    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
            
                <h5>1. la Ley 
                numero 1/1997, de fecha 18 de febrero, sobre el Uso y Manejo de los 
                    Bosques.
                </h5>
                <p>
                    El contexto del decreto se centra sobre la evolución socio-económica que 
                    experimenta el País,exige la adopción de ciertas medidas de orden macroeconómico que 
                    garantizan el sistema de transformación industrial de nuestras materias 
                    primas para la perennidad de dicha evolución en el futuro.
                </p>
                <h5>2.  Decreto numero 72/2007, por el que se prohíbe la caza y el 
                    consumo de monos y otros primates en la Republica de Guinea 
                    Ecuatorial 
                </h5>
                <p>
                    A través de este Decreto se regula la caza, el comercio y el consumo de 
                    diferentes especies de monos y otros primates en Guinea Ecuatorial por el 
                    Ministerio de Pesca y Medio Ambiente
                </p>


                <h5>Ley Nº 8/1988 - Reguladora de la fauna silvestre, caza y áreas protegidas. 
                </h5>
                <p>
                   Para mas informacion puedes consultar este <a href="http://extwprlegs1.fao.org/docs/pdf/eqg11874.pdf">documento pdf </a>
                </p>

            </div>
        </div>
    </div>

    <footer class="page-footer grey lighten-3 page-footer-leyes">
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
export default withRouter(Leyes);
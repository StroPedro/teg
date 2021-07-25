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

//import M from "materialize-css"
import M from 'materialize-css/dist/js/materialize.min.js';

const Reserva = (props) => {

 useEffect(()=>{
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems , {});
 })

return (
    
<div>
    <BarradeNavegacion/>

    <div className="container titulo-biodiversidad">
        <div className="titulo-bio-50 bioo">
            <h1>RESERVAS NATURALES DE G.E</h1>
        </div>
    </div>


    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1 className = "bio-teoria-sub">Reserva natural del Estuario de Muni</h1>
                <p> 800 km², 01°06'N 09°47'E. Al sur de la provincia Litoral, en un área de estuarios y elevaciones cerca de la
                     costa con bosque denso, bosque inundado y turberas. En las bocas de los ríos Mitong, Mitemele y Mbante hay bosque 
                     secundario y manglares. Se encuentran manatíes, elefantes, babuinos y numerosas aves migratorias. Se practica la pesca, la caza, 
                    la agricultura de subsistencia y la explotación del bosque, que son amenazas potenciales
                </p>
                <img className="materialboxed" width="650" src="" alt="" />
            </div>
        </div>
    </div>


    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1 className = "bio-teoria-sub">Reserva natural de Corisco y Elobeyes</h1>
                <p>480 km². Incluye tres islas, Elobey Grande (2,27 km²), Elobey Chica (0,19 km²) y Corisco (15 km²),
                     y una zona marítima de más de 400 km². Playas, lagunas interiores, una altura máxima de 30 m
                </p>
                <img className="materialboxed" width="650" src="" alt="" />
            </div>
        </div>
    </div>





    
    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1 className = "bio-teoria-sub">Reserva natural de Rio Campo</h1>
                <p>330 km², en el estuario del río Campo, 330 km², provincia del Litoral, cauce del río, frontera con 
                    Camerún, manglar rojo y manglar blanco) y 
                    selva tropical. Hipopótamos, gorilas, chimpancés, colobos,
                </p>
                <img className="materialboxed" width="650" src="" alt="" />
            </div>
        </div>
    </div>


    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1 className = "bio-teoria-sub">Reserva natural de Monte Temelón</h1>
                <p>230 km², región continental, provincia Wele-Nzas, meseta con una media de 700 m de altura 
                    y escarpes, limitada al norte y al este por Camerún y Gabón. 
                    Bosque poco explotado, primates.
                </p>
                <img className="materialboxed" width="650" src="" alt="" />
            </div>
        </div>
    </div>

    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1 className = "bio-teoria-sub">Reserva natural de Punta Ilende</h1>
                <p>(55 km²), en el sur de la costa, único ecosistema de praderas rodeado de bosque nativo. Zona de Mbini, 
                    río Muni. Abejaruco de Malimba, bisbita patilargo, etc
                </p>
                <img className="materialboxed" width="650" src="" alt="" />
            </div>
        </div>
    </div>

    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1 className = "bio-teoria-sub">Reserva natural de Punta Ilende</h1>
                <p>(55 km²), en el sur de la costa, único ecosistema de praderas rodeado de bosque nativo. Zona de Mbini, 
                    río Muni. Abejaruco de Malimba, bisbita patilargo, etc 
                </p>
                <img className="materialboxed" width="650" src="" alt="" />
            </div>
        </div>
    </div>

    <footer class="page-footer grey lighten-3 ">
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
export default withRouter(Reserva);
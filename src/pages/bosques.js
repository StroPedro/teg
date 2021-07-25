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

const Biodiversidad = (props) => {

 useEffect(()=>{
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems , {});
 })

return (
    
<div>
    <BarradeNavegacion/>

    <div className="container titulo-biodiversidad">
        <div className="titulo-bio-50 bioo">
            <h1>BOSQUE DE G.E</h1>
        </div>
    </div>
    <div className="container ">
        <div className="contenedor-targetas-bio">
            <div className="targeta-bio-100">
                <div className="targetas-bio">
                    <div className="img-targeta-bio">
                        <img className="materialboxed" src={bioImg2} alt="" />
                    </div>
                    <div className="link-targeta-bio">
                      
                        <p>Guinea Ecuatorial se cubre al 98% de bosques</p> 
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <p>Guinea Ecuatorial se cubre al 98% de bosques. Se 
                    trata en su mayoría de bosques densos de baja altitud 
                    (1.972.044 hectáreas), pero también de mosaicos 
                    bosque-cultivo (624.438 hectáreas), submontañosos 
                    (900 a 1.500 metros) o montañosos (más de 1.500 
                    metros)
                </p>

            </div>
        </div>
    </div>
    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1>DEFORESTACION</h1>
                <h5>EXPLOTACION FORESTAL</h5>
                <p>
                A lo largo de todo el país se encuentra madera con valor comercial 
                </p>
                <p>
                   La madera se comenzo a extraer desde los principios del decenio de 1920 , entre las especies mas exportadas encontramos :
                </p>
                <p>El okoume (Aucoumea klaineana) es desde hace 
                   décadas la principal especie explotada en Guinea 
                   Ecuatorial y representaba el 53% ,el ilomba (Pycnanthus angolensis), con 12% ;
                   el okan (Cylicodiscus gabunensis), con 7%; el tali 
                   (Erythrophleum ivorense), con 6%; y el azobe (Lophira 
                   alata), con 5% (Oficina de Control de Información y 
                   Promoción de Especies Forestales, 2011)
                </p>

                <img className="materialboxed" width="650" src={okoume} alt="" />
                <p className ="okoume-text">okoume</p>
                <h5>AGRICULTURA</h5>
                <p>
                    Antes de la independencia del país la tierra se utilizaba fundamentalmente para plantaciones de
                    cacao, actualmente la extensión de estas plantaciones representa sólo aproximadamente el 3% de tamaño inicial
                </p>
            </div>
        </div>
    </div>



    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1>PROTEGER EL BOSQUE</h1>
                
                <p>
                Si se quiere proteger los bosques de Guinea Ecuatorial, es necesario crear una ciarta capacidad de
                manejo de bosques que permitira  organizar y atenuar la tala de arboles. Hasta el
                momento no se ha avanzado mucho. No obstante, si se tiene en cuenta que las actividades
                ambientales en el país se han iniciado hace menos de un decenio. Cabe señalar que se llegarán a
                </p>
                <p>
                Guinea Ecuatorial ha realizado 
                avances significativos en el fortalecimiento del marco jurídico del 
                sector forestal, especialmente gracias a la promulgación de <Link to="/leyes">la Ley 
                Nº 1/1997, de fecha 18 de febrero,</Link>sobre el Uso y Manejo de los 
                Bosques. Sin embargo, quedan muchos desafíos por afrontar, sobre 
                todo en cuanto al reforzamiento de la coordinación institucional 
                entre los diferentes ministerios involucrados en el manejo de los 
                recursos forestales
                </p>
                

            </div>
        </div>
    </div>

    <div className="container">
        <div className="imagenes-galer-prin">
            <div className="imagenes-galer">
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={azobe} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>azobe</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={tali} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>tali</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={ilomba} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>ilomba</p>
                    </div>
                </div>

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
export default withRouter(Biodiversidad);
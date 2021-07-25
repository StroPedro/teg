import React ,{useEffect} from "react";
import BarradeNavegacion from '../components/BarradeNavegacion'
import {Link , withRouter} from 'react-router-dom'
import '../styles/biodi.css'
import bioImg1 from "../img/000000000000eeeeeeee.jpg"
import elefante from "../img/loxodoxaafricana.jpg"
import bufalo from "../img/bufalo.jpg"
import cocodrilo from "../img/cocodrilo.jpg"
import antilope from "../img/antilope.jpg"
import mandril from "../img/mendriil.jpg"
import celobo from "../img/celobo-negro.jpg"
import hipopotamo from "../img/hipopotamo.jpg"
import gorilla from "../img/gorilla.jpg"
import monoRojo from "../img/mon-de-ore-rojos.jpg"
import M from "materialize-css"


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
            <h1>BIODIVERSIDAD DE G.E</h1>
        </div>
    </div>
    <div className="container ">
        <div className="contenedor-targetas-bio">
            <div className="targeta-bio-100">
                <div className="targetas-bio">
                    <div className="img-targeta-bio ima">
                        <img className="materialboxed" src={bioImg1} alt="" />
                    </div>
                    <div className="link-targeta-bio has">
                      
                        <p>Hasta la fecha se han registrado aproximadamente 141 especies de mamíferos y 392 especies de aves.</p> 
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <p>Dada la escasez de información sobre los animales y plantas presentes en Guinea Ecuatorial, solo es
                    posible realizar un análisis superficial de la biodiversidad. Sin embargo, la importancia de Bioko
                    como sitio de vidas insulares únicas y la posición de Río Muní como refugio del pleistoceno, hacen
                    que Guinea Ecuatorial sea un país importante por su diversidad biológica. Hasta la fecha se han
                    registrado 141 especies de mamíferos y 392 especies de aves.
                </p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1>RIO MUNI</h1>
                <p>Río Muní contiene importantes poblaciones de mamíferos grandes como el gorila (Gorilla gorilla),
                    el chimpancé (pan troglodytes), el elefante (Loxodonta africana), el bufalo (Synceros caffer nanus)
                    y el pequeño antílope de bosque. Los Primates de particular importancia para la conservación en el
                    territorio continental son el mangabey de casco rojo (cercocebus torquatus), el mandril (mandrillus
                    sphinx), el celobo negro (Colobus satanus), el chimpancé y el gorilla existen diez especies de
                </p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="imagenes-galer-prin">
            <div className="imagenes-galer">
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={elefante} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>gorila</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={antilope} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>antilope</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={cocodrilo} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>cocodrilo</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={bufalo} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>bufalo</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={mandril} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>mandril</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">

                <p>
                    murciélago de frutas que por el momento ninguno de ellos reviste particular importancia en materia
                    de conservación. El estuario Río Muní alberga una población apreciable de manatis (Trichechus
                    senegalensis) en estuario del Río Ntem una población de hipopótamos (Hipopotamus anphibius).
                    Se sabe que hay cocodrilos de hocico delgado (Crocadylus catahractus) y también pueden existir
                    otras dos especies de cocodrilo Africano, aunque no dispone datos sobre su situación. Si bien el
                    grado de endemismo de las especies de vertebrados en bajo, el 28% de los 65 mamíferos y el 32%
                    de las 44 aves residentes son subespecies endémicas.
                </p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="bio-teoria-conte-prin">
            <div className="bio-teoria">
                <h1>ISLAS</h1>
                <p>
                    En Bioko los principales primates de interés son subespecies endémicas de mandril (Mandrillus
                    rencophaeus poensis), el mono de prenss (ceropithecus preussi insularis), el mono de orejas rojos
                    (cercopithecus erythotis), y el colebo rojo de pennaut (Procolobus permanti).
                    Las únicas especies endémicas de vertebrados conocidas en Bioko son aves: el speirops Fernando Pó
                    (Speyrops brunneus), un estinco (Scelotes peonsis) y un caeciliano (Schistometopum garzonheydti).
                    En los anexos encontramos diferentes especies de animales cuya caza de prohíbe y en otras es
                    permitida.
                </p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="imagenes-galer-prin">
            <div className="imagenes-galer">
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={celobo} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>celobo negro</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={monoRojo} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>colebo rojo de pennaut</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={hipopotamo} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>hipopotamo</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={gorilla} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>gorila</p>
                    </div>
                </div>
                <div className="img-indi">
                    <div className="img-galeria">
                        <img className="materialboxed" src={bioImg1} alt="" />
                    </div>
                    <div className="nombre-img">
                        <p>gorila</p>
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
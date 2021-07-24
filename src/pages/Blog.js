
import React , {useState , useEffect , useContext} from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { login , registrar } from "../services/AuthApi";
import axios from 'axios'
import {Link , withRouter} from 'react-router-dom'
import Auth from '../contexts/Auth'
import '../styles/blog.css'
import '../styles/paginacion.css'
import BarradeNavegacion from '../components/BarradeNavegacion'
import ReactHtmlParser from "react-html-parser"
import M from 'materialize-css'
import Loader from "react-loader-spinner";
import  { format , register } from "timeago.js"

//timeago
register('es_ES', (number, index, total_sec) => [
    ['justo ahora', 'ahora mismo'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 minuto', 'en 1 minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'in %s horas'],
    ['hace 1 dia', 'en 1 dia'],
    ['hace %s dias', 'en %s dias'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
][index]);
const timeago = timestamp => format(timestamp, 'es_ES');
////////////////////////////////////////////




const Blog = (props) => {
    const {history} = props

    const [user , setUser] = useState({
        email:'',
        contrasena:''
    })
    const [userR , setUserR] = useState({
        nombre:'',
        email:'',
        contrasena:''
    })
    const [_id , set_ID ] = useState('')
    const [respuestaDbR , setRespuestaDbR ] = useState('')
    const [preguntasTraidas , setPreguntasTraida] = useState([])
    const [respuestTraidas , setrespuestTraidas] = useState([])
    const [respuestaDb , setRespuestaDb ] = useState('')
    const [paginaSiguiente , setPaginaSiguiente ] = useState(1)
    const [paginaAnterior , setPaginaAnterior ] = useState(1)
    const [totalPage , setTotalPage ] = useState(1)
    const [addData , setVal] = useState('')
    const {isAuthentificated , setIsAuthentificated} = useContext(Auth)
    const [probar , setProbar] = useState(true) 
    const [imagen , setImagen] = useState('') 
    const [preview, setPreview] = useState(""); 
    const [cargar, setCargar] = useState(false); 
    const [cargarPagina, setCargarPagina] = useState(false); 
    const [mensajeServidor, setMensajeServidor] = useState("");
    const [spinnerHacerPregunta, setSpinnerHacerPregunta] = useState(false);
    const [elegirForm, setElegirForm] = useState(true);
    const [datoBusqueda , setDatoBusqueda] = useState([]) 
    const [mensajeError , setMensajeError] = useState("");
    const [pageActual , setPageActual] = useState(1)
   

















   


    const handleChange = ({currentTarget}) => {
        const {name , value} = currentTarget;
        setUser({...user , [name] : value})
        
    }

    const handleChangeR = ({currentTarget}) => {
        const {name , value} = currentTarget;
        setUserR({...userR , [name] : value})
        console.log(userR)
    }


    const HacerPregunta = async (e) => {
        e.preventDefault()
        if (isAuthentificated) {
            setSpinnerHacerPregunta(true)
            console.log(addData)
            const fs = new FormData()
            fs.append("user" , window.sessionStorage.getItem('user'))
            fs.append("res" , addData)
            const respuesta = await axios.post(`https://app-node-react.herokuapp.com/RESPONteg/${_id}`, fs , {headers :{"Content-Type":"multipart/form-data"}})
            const respuestaServidor = respuesta.data
            console.log(respuestaServidor)

            
            setMensajeServidor(respuestaServidor)
            setPreview("")
            setVal("")
            await TraerRespues()


        }else{
            
        }

    }



   const BuscarDatos = (e) => {
    setDatoBusqueda(e.target.value) 
    
   }
    const BuscarMateria = async (e) =>{
        e.preventDefault()
        const datos = await axios({
            method:'post' , 
            url : 'https://app-node-react.herokuapp.com/buscar_pregunta', 
            data: {'preguntaQueSeBusca':datoBusqueda}
        })
        
        console.log(datos.data)
        setPreguntasTraida(datos.data)
    }


   const CogerDatosEditorTexto = (e , editor) =>{
       const data = editor.getData()
       setVal(data)
       
   }


   const TraerPreguntas = async () =>{
    const datos = await axios({
        method:'get' , 
        url : 'https://app-node-react.herokuapp.com/cogerPreguntaTeg', 
    })
    console.log(datos.data[0]["_id"] , "ffffffffffffffffffffffff")
    setPreguntasTraida(datos.data)
    //setPaginaSiguiente(datos.data.nextPage)
    //setPaginaAnterior(datos.data.prevPage)
    //setTotalPage(datos.data.totalPages)
    //setPageActual(datos.data.page)
    console.log(totalPage, "gggggggggggggggggggggggggggggg")
    if (datos.data) {
        setCargar(true)
        setSpinnerHacerPregunta(false)
        set_ID(datos.data[0]["_id"])
    }else{
        setCargar(false)
    }
    console.log(datos.data)
    
  }

  const TraerRespues = async () =>{
    if (_id) {
        
    }
    const datos = await axios({
        method:'get' , 
        url : 'https://app-node-react.herokuapp.com/cogerRespuestasTeg', 
    })
    console.log(datos.data , "ffffffffffffffffffffffff")
    setrespuestTraidas(datos.data)
    //setPaginaSiguiente(datos.data.nextPage)
    //setPaginaAnterior(datos.data.prevPage)
    //setTotalPage(datos.data.totalPages)
    //setPageActual(datos.data.page)
    console.log(totalPage, "gggggggggggggggggggggggggggggg")
    if (datos.data.docs) {
        setCargar(true)
        setSpinnerHacerPregunta(false)
    }else{
        setCargar(false)
    }
    console.log(datos.data)
    
  }




  const handleChangeImagen = e =>{
    setImagen(e)
  }
  
       

const PaginacionPage = () => {
        const y = []
        var w = ""
     
            for (let i = 0; i < totalPage; i++) {
                var e = i+1
                y.push(e)

                if (pageActual == i+1) {
                }else{
                    
                }
            }
        console.log(w)

        const lista = y.map((x)=>(
            <>
                {pageActual==x?
                <li  class = "active paginacion-boton" ><a href="#!" onClick = { () =>{ 
                    const val = "e"+ x ;
                    TraerPreguntasConPaginacion(val)}
                } >{x}</a>
                </li>
                :
                <li  class = "paginacion-boton " ><a href="#!" onClick = { () =>{ 
                    const val = "e"+ x ;
                    TraerPreguntasConPaginacion(val)}
                } >{x}</a>
                </li>
                }
  
            </>

            )                          
        )
        console.log(lista)
    return(
        <ul class="pagination">
            {paginaAnterior?
            <li class="waves-effect"><a href="#!" onClick = { () =>{ 
                const val = "p"+ paginaAnterior ;
                TraerPreguntasConPaginacion(val)}
               }><i class="material-icons">chevron_left</i></a>
            </li>
            :
            <li class="disabled"><a href="#!" 
               ><i class="material-icons">chevron_left</i></a>
            </li>
            }


            {lista}
            
            
            {paginaSiguiente?
            <li class="waves-effect"><a href="#!"
             onClick = { () =>{ 
                const val = "n"+ paginaSiguiente ;
                TraerPreguntasConPaginacion(val)}
               }
            ><i class="material-icons">chevron_right</i></a></li>
            :
            <li class="disabled"><a href="#!" ><i class="material-icons">chevron_right</i></a></li>
            }

        </ul>
    )
}
useEffect(()=>{
    
    if (imagen) {
        const reader = new FileReader()
        reader.onloadend = () =>{
            setPreview(reader.result) ;

        }
        reader.readAsDataURL(imagen)
    }else{
        setPreview(null)
    }

        if (document.readyState == "loading") {
            console.log(cargarPagina)

        }else{
            
            setCargarPagina(true)
        }
},[imagen] )


useEffect(()=>{
    
    TraerPreguntas()
    TraerRespues()
    
} , [])

return (
    
<div>
    <BarradeNavegacion/>

    <div className = 'contenedor-pub'>
            <div className="container-img-pub  " >
                <div className ="row formulario-contenedor-text-editor " >
                    <form className ="formulario" onSubmit ={HacerPregunta}  >
                        <div className="editor">
                            <CKEditor editor= {ClassicEditor} data={addData} onChange={CogerDatosEditorTexto}  />
                        </div>
                        {isAuthentificated ?"":                         
                            <div className="respuestaError">
                                <p>{mensajeError}</p>
                            </div>
                        }
                        {isAuthentificated?                
                        <button type="submit" className=" btnn btn-small">Publicar</button>:                               
                        <a onClick = {()=>{setMensajeError("por favor inicia session")}}  className="btnn btn-small">Publicar </a>}                                                  

                    </form>
                </div>
        </div>
    </div>  
    <div className="container titulo-biodiversidades">
        <div className="tema-a-debatir">
            <h1>tema a debatir esta semana</h1>
        </div>
    </div>
    <div className="container">
        <div className="contenedor-text-previ-100">
            <div className="contenedor-text-previ-50">
                <div className="contenido-teorico">
                    {ReactHtmlParser(addData)}
                </div>
            </div>
        </div>
    </div>  




    <div className="containe">

    {preguntasTraidas.map((datos)=>
            <div className="pregunta-de-la-semana-100">
            <div className="pregunta-de-la-semana-50">
                <p>{datos["tegpre"]}</p>
            </div>
            </div>
    )}

    </div>

    <div className="container titulo-biodiversidades">
        <div className="tema-a-debatir">
            <h1>Respuestas</h1>
        </div>
    </div>
    <div className="containe">
       

        {respuestTraidas.map((datos)=>
            <div className="res-de-la-semana-100">
         
               <div className="res-de-la-semana-50-100">
                   <div className="res-de-la-semana-50-50">
                   <div className="user-res margen-iz">
                       <span>{datos["user"]}</span>
                   </div>
                   <div className="fechas-res margen-iz">
                       <span>{timeago(datos["fecha"])}</span>
                   </div>
                   <div>
                       <p>{datos["numresp"]}</p>
                   </div>
                   </div>
               </div>
      
               <div className="res-de-la-semana-50-100">
                   <div className="res-de-la-semana-50-50">
                        <div className="res-de-la-semana-50-50-p">
                            <p>{ReactHtmlParser(datos["tegres"])}</p>
                        </div>
                        
                   </div>

               </div>
      
          </div>
        )}


 
    </div>
    
</div>
    )
}
export default withRouter(Blog);
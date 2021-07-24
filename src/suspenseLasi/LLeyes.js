import React , {Suspense , lazy} from "react"
import  MostrarMateria from "../pages/mostrarMateria"
import '../styles/blog.css'
import "../styles/examenes.css"
const Leyes = lazy(()=> import("../pages/leyes"))

const Leyess =()=>{
    return(
    <div>
        <Suspense fallback = {<MostrarMateria/>}>
                   <Leyes/>
        </Suspense>
    </div>
    )
}


export default Leyess
import React ,  {useState} from 'react'
import { Switch , Route, BrowserRouter ,HashRouter } from 'react-router-dom'
import Login from "./users/Login"
import Profil from './users/Profil'
import {hasAuthentificated} from './services/AuthApi'
import Auth from './contexts/Auth'
import AuthentificatedRoute from './components/AuthentificatedRoute'

import PageNotFoun from './pages/PageNotFoun'


import Homme from "./suspenseLasi/Homme"
import LLogin from "./suspenseLasi/LLogin"
import BBlog from './suspenseLasi/BBlog'
import RegisT from './suspenseLasi/RegisT'
import BiodiverLaze from './suspenseLasi/Biodi'
import BosquesLaze from './suspenseLasi/Bosquess'
import Leyess from './suspenseLasi/LLeyes'


import './styles/Respuestas.css'



function App(){
    const [isAuthentificated , setIsAuthentificated] = useState(hasAuthentificated())
    return(
        <Auth.Provider value = {{isAuthentificated , setIsAuthentificated}} >
            <HashRouter>
                    <Switch>

                            <Route exact path = "/" component = {Homme }/>
                            <Route exact  path= "/registro" component = {RegisT}/>
                            <Route exact  path = "/iniciar" component = {LLogin}/>
                            <Route exact  path= "/preguntas" component = {BBlog}/>
                            <Route exact  path= "/biodiversidad" component = {BiodiverLaze}/>
                            <Route exact  path= "/leyes" component = {Leyess}/>
                            <Route exact  path= "/bosques" component = {BosquesLaze}/>
                            <AuthentificatedRoute  path = "/profil" component = {Profil}/>

                            <Route   component = {PageNotFoun}/>                       
                    </Switch>
            </HashRouter>
        </Auth.Provider>
    )
   
}

export default App;
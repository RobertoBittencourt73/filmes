import React from 'react'
import Home from './pages/home'
import Header from './components/Header'
import Filme from './pages/Filmes'
import Erro from './pages/Erro'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/filme/:id' component={Filme} />
                <Route path='*' component={Erro} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes
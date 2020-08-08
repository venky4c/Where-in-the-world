import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import App from '../App'
import CountryCard from './CountryCard'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" 
            component={App}/> 
          <Route path="/country/:country"
           component={CountryCard}/>
        </Switch>
        </BrowserRouter>

    )
}

export default Routes
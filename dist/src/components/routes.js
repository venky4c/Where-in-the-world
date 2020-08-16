import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import App from '../App'
import CountryCard from './CountryCard'
import Header from './Header';

const Routes = () => {
    return (
        <BrowserRouter>
        <div className="wrapper"> <Header />
        <Switch>          
          <Route exact path="/" 
            component={App}/> 
          <Route path="/country/:country"
           component={CountryCard}/>
        </Switch>
        </div>
        </BrowserRouter>
        

    )
}

export default Routes
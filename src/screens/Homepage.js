import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    NavLink,
} from 'react-router-dom';
import '../assets/styles/styles.css'
import {TwoHoursNowcast, TwentyfourHoursForecast, FourDaysForecast, PSI, UV} from '../routes/routes';

class Home extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <>
                <Router basename='/Project2-Weather'>
                    <div className='navBar'>
                        <div>
                            <Link className='link' to ='/2hrs'>2 Hours Nowcast</Link>
                            <Link className='link'to ='/24hrs'>24 Hours Forecast</Link>
                            <Link className='link'to ='/4days'>4 Days Forecast</Link>
                            <Link className='link'to ='/PSI'>PSI</Link>
                            <Link className='link'to ='/UV'>UV</Link>
                            <Link to='/'></Link>
                        </div>
                    </div>
                    <div className="mapArea">
                        <Switch>
                            <Route className='leaflet-container' path='/2hrs'>
                                <TwoHoursNowcast />
                            </Route>
                            <Route className='leaflet-container' path='/24hrs'>
                                <TwentyfourHoursForecast />
                            </Route>
                            <Route path='/4days'>
                                <FourDaysForecast />
                            </Route>
                            <Route className='leaflet-container' path='/PSI'>
                                <PSI />
                            </Route>
                            <Route path='/UV'>
                                <UV />
                            </Route>
                            <Route exact path='/'>
                                <h2> This is the empty page</h2>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}

export default Home;
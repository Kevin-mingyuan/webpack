import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from 'react-router-dom';
// import {HashRouter as Router, Route, Switch, Redirect,Link} from 'react-router-dom'

import Home from './components/home/Home.jsx';
import Home2 from './components/home/Home2.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/home'>home</Link>
                        </li>
                        <li>
                            <Link to='/home2'>home22</Link>
                        </li>
                    </ul>

                    <Switch>
                        {/* <Route ref='aa' exact path='/' component={AA} /> */}

                        <Route path='/home' component={Home} />
                        <Route path='/home2' component={Home2} />

                        {/* 重定向必须在路由之后 exact是精准匹配 */}
                        <Redirect exact  to='/home'/> 

                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;
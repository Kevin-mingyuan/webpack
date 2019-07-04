import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from 'react-router-dom';
// import {HashRouter as Router, Route, Switch, Redirect,Link} from 'react-router-dom'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                hello react
            </div>
        )
    }

    name(lalal) {
        const aaaa = 'i am es ?'
        return () => { console.log('bi bao')}
    }
}
export default App;
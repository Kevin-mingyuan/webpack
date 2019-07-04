import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from 'react-router-dom';
import './style.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="hello">
                <Link to="/home"> hello home </Link>
                <Link to="/home2"> hello home2 </Link>
                <p>1111111111</p>
            </div>
        )
    }
}
export default Home;
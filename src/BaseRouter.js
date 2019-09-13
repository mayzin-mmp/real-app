import React,{ Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';

class BaseRouter extends React.Component{
  componentDidMount(){
    const axios = require('axios');
    axios.get('https://api.github.com/repos/mayzin-mmp/real-app/issues')
    .then(function (response) {
      // handle success
      const issues = response.data.filter
      console.log('response',response.data.filter(issue => issues));
    });
  }
    render(){
        return(
            <div className="base-router">
                <Router>
                    <div>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route path="/opened" component={Opened} />
                        <Route path="/closed" component={Closed} />
                        <Route path="/about" component={About} />
                    </div>
                    </Router>
            </div>

        )
    }
}
function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
function Opened() {
    return (
      <div>
        <h2>Opened</h2>
      </div>
    );
  }
function Closed() {
    return (
      <div>
        <h2>Closed</h2>
      </div>
    );
  }
function About(){
    return(
        <div>
            <h2>About</h2>
        </div>  
    );
}


export default BaseRouter;
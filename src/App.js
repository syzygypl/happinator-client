import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ResultBrowser from './ResultBrowser';
import Vote from './Vote';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={ResultBrowser}/>
                <Route path="/vote" component={Vote}/>
            </div>
        );
    }
}

export default App;

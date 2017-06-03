import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ResultBrowser from './ResultBrowser';
import CollectMood from './CollectMood';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={ResultBrowser}/>
                <Route path="/collect-mood" component={CollectMood}/>
            </div>
        );
    }
}

export default App;

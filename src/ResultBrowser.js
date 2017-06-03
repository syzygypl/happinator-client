import React, {Component} from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import PersonTextVariant from './PersonTextVariant';
import './ResultBrowser.css';

class ResultBrowser extends Component {
    constructor() {
        super();

        this.state = {
            averageHappinessLevel: '-',
            participants: '-'
        };

        const env = runtimeEnv();

        console.log('API url:', env);

        setInterval(() => {
            fetch(env.REACT_APP_API_URL + '/happiness_levels/statistics')
                .then((response) => (response.json()))
                .then((json) => {
                    this.setState({averageHappinessLevel: json.happiness.score || '-'});
                    this.setState({participants: json.total || '-'});
                });
        }, 1000);
    }

    render() {
        return (
            <div className="result-browser">
                <div className="result-browser__average-label">dzisiejszy poziom zadowolenia</div>
                <div className="result-browser__average">{this.state.averageHappinessLevel}%</div>
                <div className="result-browser__responses">liczba uczestników: {this.state.participants} <PersonTextVariant value={this.state.participants}/></div>
            </div>
        )
    }
}

export default ResultBrowser;

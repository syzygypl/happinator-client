import React, {Component} from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import './ResultBrowser.css';

class ResultBrowser extends Component {
    constructor() {
        super();

        this.state = {
            averageHappinessLevel: '-',
            participants: '-',
            lastAverageHappinessLevel: '-',
            lastParticipants: '-',
        };

        const env = runtimeEnv();

        const updateHappiness = () => {
            fetch(env.REACT_APP_API_URL + '/happiness_levels/statistics')
                .then((response) => (response.json()))
                .then((json) => {
                    this.setState({averageHappinessLevel: json.happiness.score || '-'});
                    this.setState({participants: json.total || '-'});
                });
        };

        setInterval(updateHappiness, 1000);
        updateHappiness();

        const updateLastHappiness = () => {
            fetch(env.REACT_APP_API_URL + '/happiness_levels/statistics/2017-06-02/2017-06-02')
                .then((response) => (response.json()))
                .then((json) => {
                    this.setState({lastAverageHappinessLevel: json.happiness.score || '-'});
                    this.setState({lastParticipants: json.total || '-'});
                });
        };

        setInterval(updateLastHappiness, 10000);
        updateLastHappiness();
    }

    render() {
        const happinessDiff = this.state.averageHappinessLevel - this.state.lastAverageHappinessLevel;
        const happinessDiffText = `o ${happinessDiff ? happinessDiff : '-'} ${happinessDiff > 0 ? 'lepiej' : 'gorzej'} niż wczoraj`;

        return (
            <div className="result-browser">
                <div className="result-browser__average-label">dzisiejszy poziom zadowolenia</div>
                <div className="result-browser__average">{this.state.averageHappinessLevel}/100</div>
                <div className="result-browser__responses">{happinessDiffText}</div>
                <div className="result-browser__responses">liczba osób, które oddały głos: {this.state.participants}</div>
            </div>
        )
    }
}

export default ResultBrowser;

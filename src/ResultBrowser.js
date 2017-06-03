import React, {Component} from 'react';
import './ResultBrowser.css';

const URL = 'http://syzygy-happiness.herokuapp.com';

class ResultBrowser extends Component {
    constructor() {
        super();

        this.state = {
            averageHappinessLevel: '-',
            participants: '-'
        };

        setInterval(() => {
            fetch(URL + '/happiness_levels/statistics')
                .then((response) => (response.json()))
                .then((json) => {
                    this.setState({averageHappinessLevel: json.avg});
                    this.setState({participants: json.total});
                });
        }, 1000);
    }

    render() {
        return (
            <div className="result-browser">
                <div className="result-browser__average-label">dzisiejszy poziom zadowolenia</div>
                <div className="result-browser__average">{this.state.averageHappinessLevel}</div>
                <div className="result-browser__responses">{this.state.participants} osoby odpowiedziały</div>
            </div>
        )
    }
}

export default ResultBrowser;

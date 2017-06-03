import React, {Component} from 'react';
import ResultBrowser from './ResultBrowser';
import MoodCollector from './MoodCollector';
import './Vote.css';

class Vote extends Component {
    constructor() {
        super();

        this.state = {
            isThankYouVisible: false
        };
    }

    render() {
        const resultContainerClass = this.state.isThankYouVisible ? 'vote__result-container-active' : '';
        const thankYouClass = this.state.isThankYouVisible ? 'vote__thank-you-active' : '';

        return (
            <div className="vote">
                <MoodCollector onMoodSelected={this.handleOnMoodSelected.bind(this)}/>
                <div className={`vote__result-container ${resultContainerClass}`}>
                    <div className={`vote__thank-you ${thankYouClass}`}>
                        <div className="vote__thank-you-text">Dzięki!</div>
                        <div className="vote__thank-you-web">happinator.szg.io</div>
                        <ResultBrowser />
                    </div>
                </div>
            </div>
        )
    }

    handleOnMoodSelected() {
        this.setState({isThankYouVisible: true});
        setTimeout(() => this.setState({isThankYouVisible: false}), 5000);
    }
}

export default Vote;

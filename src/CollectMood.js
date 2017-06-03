import React, {Component} from 'react';
import ResultBrowser from './ResultBrowser';
import MoodCollector from './MoodCollector';
import './CollectMood.css';

class CollectMood extends Component {
    constructor() {
        super();

        this.state = {
            isThankYouVisible: false
        };
    }

    render() {
        const resultContainerClass = this.state.isThankYouVisible ? 'collect-mood__result-container-active' : '';
        const thankYouClass = this.state.isThankYouVisible ? 'collect-mood__thank-you-active' : '';

        return (
            <div className="collect-mood">
                <MoodCollector onMoodSelected={this.handleOnMoodSelected.bind(this)}/>
                <div className={`collect-mood__result-container ${resultContainerClass}`}>
                    <div className={`collect-mood__thank-you ${thankYouClass}`}>
                        <div className="collect-mood__thank-you-text">Dzięki!</div>
                        <div className="collect-mood__thank-you-web">happinator.szg.io</div>
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

export default CollectMood;

import React, {Component} from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import Button from './Button';
import './MoodCollector.css';

const env = runtimeEnv();

const HAPPY = 'happy';
const NEUTRAL = 'neutral';
const SAD = 'sad';

class MoodCollector extends Component {
    render() {
        return (
            <div className="mood-collector">
                <Button label="Mam dobry humor!" type={HAPPY} onClick={this.setHappinessLevel.bind(this)} />
                <Button label="Dziś tak średnio..." type={NEUTRAL} onClick={this.setHappinessLevel.bind(this)} />
                <Button label="Smuteczek :-(" type={SAD} onClick={this.setHappinessLevel.bind(this)} />
            </div>
        )
    }

    setHappinessLevel(level) {
        setTimeout(() => {
            this.props.onMoodSelected();
        }, 200);

        fetch(env.REACT_APP_API_URL + '/happiness_levels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                level: level
            })
        });
    }
}

export default MoodCollector;

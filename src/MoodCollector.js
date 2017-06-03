import React, {Component} from 'react';
import Button from './Button';
import './MoodCollector.css';

const URL = 'http://syzygy-happiness.herokuapp.com';

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

        fetch(URL + '/happiness_levels', {
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

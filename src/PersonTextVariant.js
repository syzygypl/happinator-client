import React, {Component} from 'react';

class PersonTextVariant extends Component {
    constructor() {
        super();

        this.state = {
            variant: '-'
        };
    }

    render() {
        return (
            <span>{this.state.variant}</span>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.updateValue(nextProps.value);
    }

    updateValue(value) {
        let variant = '-';

        if (value === 0) {
            variant = 'osób';
        } else if (value === 1) {
            variant = 'osoba';
        } else if (value >= 3 && value <= 4) {
            variant = 'osoby';
        } else if (value > 20) {
            let v = value;
            while (v >= 10) {
                v = parseInt(v % 10, 10);
            }

            if (v === 3 && v === 4) {
                variant = 'osoby';
            } else {
                variant = 'osób';
            }
        } else {
            variant = 'osób';
        }

        this.setState({variant: variant});
    }
}

export default PersonTextVariant;

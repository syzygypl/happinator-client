import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    constructor() {
        super();

        this.state = {
            isActive: false
        };
    }

    render() {
        const activeClass = this.state.isActive === true ? 'button--active' : '';

        return (
            <div className={`button button--${this.props.type} ${activeClass}`} onClick={this.activate.bind(this)}>{this.props.label}</div>
        )
    }

    activate() {
        this.props.onClick(this.props.type);
        this.setState({isActive: true});

        setTimeout(() => {
            this.setState({isActive: false});
        }, 500);
    }
}

export default Button;

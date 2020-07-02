import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {value : this.props.value};
    }

    handleChange = (event) => {
        this.setState({value : event.target.value});
        this.props.handleChange(event.target.value);
    }

    render() {
        return (
            <input
                className={styles.Input}
                id={this.props.name}
                name={this.props.name}
                type={this.props.type}
                value={this.value}
                placeholder = {this.props.placeholder}
                onChange={this.handleChange}
            />
        );
    }
}

export default Input;
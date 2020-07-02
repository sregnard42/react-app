import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {
    
    render() {
        return (
            <input
                className={styles.Input}
                id={this.props.name}
                name={this.props.name}
                type={this.props.type}
                value={this.props.value}
                placeholder = {this.props.placeholder}
                onChange={this.props.handleChange}
            />
        );
    }
}

export default Input;
import React from 'react';
import styles from './Radio.module.css';

class RadioItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

class Radio extends React.Component {

    render() {
        return (
            <div className={styles.Radio}>
                {this.props.choices.map((choice) => {
                    return (
                        <RadioItem
                            name={choice}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Radio;
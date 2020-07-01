import React from 'react';
import styles from './Tick.module.css';

class TickItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

class Tick extends React.Component {

    render() {
        return (
            <div className={styles.Tick}>
                {this.props.choices.map((choice) => {
                    return (
                        <TickItem
                            name={choice}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Tick;
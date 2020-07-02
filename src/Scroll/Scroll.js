import React from 'react';
import styles from './Scroll.module.css';

class ScrollItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

class Scroll extends React.Component {

    constructor(props)
    {
        super(props);
        this.key = 1;
    }

    render() {
        return (
            <div className={styles.Scroll}>
                {this.props.choices.map((choice) => {
                    return (
                        <ScrollItem
                            key={this.key++}
                            name={choice}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Scroll;
import React from 'react';
import styles from './Question.module.css';

class Question extends React.Component {
    render() {
        return (
            <div className={styles.Question}>
                {this.props.q}<br />
                {this.props.a}
            </div>
        );
    }
}

export default Question; 
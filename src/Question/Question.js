import React from 'react';

class Question extends React.Component {
    render() {
        return (
            <div>
                {this.props.q}<br />
                {this.props.a}<br />
                <br />
            </div>
        );
    }
}

export default Question; 
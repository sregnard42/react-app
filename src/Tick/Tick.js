import React from 'react';
import styles from './Tick.module.css';

class TickBox extends React.Component {
    constructor(props) {
        super(props);
        this.stateDefault = { selected: false };
        this.state = this.stateDefault;
        this.style = styles.TickBox;
    }

    onClick = () => {
        this.setState({ selected: !this.state.selected });
        this.props.onChange();
    }

    render() {
        this.style = this.state.selected ? styles.TickBoxSelected : styles.TickBox;
        return (
            <div className={this.style} onClick={this.onClick}></div>
        );
    }
}

class TickItem extends React.Component {
    constructor(props) {
        super(props);
        this.selected = false;
    }

    onChange = () => {
        this.selected = !this.selected;
        this.props.onChange(this.props.name);
    }

    render() {
        return (
            <div className={styles.TickItem}>
                <TickBox onChange={this.onChange} />
                {this.props.name}
            </div>
        );
    }
}

class Tick extends React.Component {
    constructor(props) {
        super(props);
        this.key = 1;
        this.selected = '';
        this.onChange = this.onChange.bind(this);
    }

    onChange(name) {
        this.selected = name;
        this.props.handleChange(name);
    }

    render() {
        return (
            <div className={styles.Tick}>
                {this.props.choices.map((choice) => {
                    return (
                        <TickItem
                            key={this.key++}
                            name={choice}
                            onChange={this.onChange}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Tick;
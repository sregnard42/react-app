import React from 'react';
import styles from './Radio.module.css';

class RadioBtn extends React.Component {
    constructor(props) {
        super(props);
        this.stateDefault = { selected: false };
        this.state = this.stateDefault;
        this.style = styles.RadioBtn;
    }

    onClick = () => {
        if (this.state.selected)
            return ;
        this.setState({ selected: true });
        this.props.onChange(this);
    }

    render() {
        this.style = this.state.selected ? styles.RadioBtnSelected : styles.RadioBtn;
        return (
            <div className={this.style} onClick={this.onClick}></div>
        );
    }
}

class RadioItem extends React.Component {
    constructor(props) {
        super(props);
        this.selected = false;
    }

    onChange = (btn) => {
        this.selected = true;
        this.props.onChange(btn, this.props.name);
    }

    render() {
        return (
            <div className={styles.RadioItem}>
                <RadioBtn onChange={this.onChange} />
                {this.props.name}
            </div>
        );
    }
}

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.key = 1;
        this.btn = 0;
        this.selected = '';
        this.onChange = this.onChange.bind(this);
    }

    onChange(btn, name) {
        console.log(this.btn);
        if (this.btn !== 0)
            this.btn.setState({ selected: false });
        this.btn = btn;
        this.selected = name;
    }

    render() {
        return (
            <div className={styles.Radio}>
                {this.props.choices.map((choice) => {
                    return (
                        <RadioItem
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

export default Radio;
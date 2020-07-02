import React from 'react';
import styles from './DropDown.module.css';

class DropDownItem extends React.Component {
    constructor(props) {
        super(props);
        this.selected = false;
    }

    onChange = () => {
        this.selected = true;
        this.props.onChange(this.props.name);
    }

    render() {
        return (
            <div className={styles.DropDownItem}>
                {this.props.name}
            </div>
        );
    }
}

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.key = 1;
        this.btn = 0;
        this.selected = '';
        this.onChange = this.onChange.bind(this);
    }

    onChange(name) {
        this.selected = name;
        this.props.handleChange(name);
    }

    render() {
        return (
            <div className={styles.DropDown}>
                {this.props.choices.map((choice) => {
                    return (
                        <DropDownItem
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

export default DropDown;
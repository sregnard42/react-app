import React from 'react';
import styles from './DropDown.module.css';

class DropDownItem extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.state = {selected: (this.props.name === this.props.selected)};
    }

    onClick = () => {
        if (this.props.collapsed === false)
            this.setState({selected: true});
        this.props.onChange(this, this.props.name);
    }

    render() {
        if (this.name === '')
            this.name = '- Select -';
        if (this.props.collapsed && !this.state.selected)
                this.style = styles.DropDownCollapse;
        else if (!this.props.collapsed)
            this.style = this.state.selected ? styles.DropDownItemSelected : styles.DropDownItem;
        return (
            <div className={this.style} onClick={this.onClick}>
                {this.name}
            </div>
        );
    }
}

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.key = 1;
        this.state = {collapsed: true};
        this.selected = '';
    }

    onChange = (item, name) => {
        if (this.state.collapsed)
        {
            this.setState({collapsed: !this.state.collapsed});
            return ;
        }
        this.selected = name;
        this.props.handleChange(name);
        this.setState({collapsed: true})
    }

    render() {
        this.selected = this.props.selected();
        return (
            <div className={styles.DropDown}>
                {this.props.choices.map((choice) => {
                    return (
                        <DropDownItem
                            key={this.key++}
                            name={choice}
                            onChange={this.onChange}
                            selected={this.selected}
                            collapsed={this.state.collapsed}
                        />
                    )
                })}
            </div>
        );
    }
}

export default DropDown;
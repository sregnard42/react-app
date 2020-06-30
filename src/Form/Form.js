import React from 'react';
import './Form.css';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.stateDefault = {value : ''};
        this.state = this.stateDefault;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event)
    {
        alert(this.state.value);
        event.preventDefault();
    }

    handleReset()
    {
        this.setState(() => this.stateDefault);
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <label>
                    Type text :<br />
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        );
    }
}

export default Form;
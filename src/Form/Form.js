import React from 'react';
import styles from './Form.module.css';
import Question from '../Question/Question';
import Input from '../Input/Input';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.stateDefault = {
            text    : '',
            radio   : '',
            tick    : '',
            scroll  : ''
        };
        this.state = this.stateDefault;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event)
    {
        this.setState({text: event.target.value});
    }

    handleSubmit(event)
    {
        alert(this.state.text);
        event.preventDefault();
    }

    handleReset()
    {
        this.setState(() => this.stateDefault);
    }

    render()
    {
        return(
            <div className={styles.Form}>
            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <Question
                q={'What\'s your name ?'}
                a={
                    <Input
                        type={'text'}
                        title={'Name'}
                        name={'name'}
                        value={this.state.text.value}
                        placeholder={'Enter your name'}
                        handleChange={this.handleChange}
                    />
                }
                />
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
            </div>
        );
    }
}

export default Form;
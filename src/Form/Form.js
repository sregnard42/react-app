import React from 'react';
import styles from './Form.module.css';
import Question from '../Question/Question';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Tick from '../Tick/Tick';
import Scroll from '../Scroll/Scroll';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.text = '';
        this.radio = '';
        this.tick = '';
        this.scroll = '';
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChangeText = (text) => {
        this.text = text;
    }

    handleChangeRadio = (radio) => {
        this.radio = radio;
    }

    checkText()
    {
        if (this.text === '')
            return 'Question 1 not answered\n';
        return '(OK) Answer 1 : ' + this.text + '\n';
    }

    checkRadio()
    {
        if (this.radio === '')
            return 'Question 2 not answered\n';
        if (this.radio === '42')
            return '(OK) Answer 2 : ' + this.radio + '\n';
        else
            return '(KO) Answer 2 : ' + this.radio + '\n';
    }

    handleSubmit(event) {
        event.preventDefault();
        let output = this.checkText();
        output += this.checkRadio();
        alert(output);
    }

    handleReset() {
        this.text = '';
        this.radio = '';
        this.forceUpdate();
    }

    render() {
        return (
            <div className={styles.Form}>
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <Question
                        q={'What\'s your name ?'}
                        a={
                            <Input
                                type={'text'}
                                title={'Name'}
                                name={'name'}
                                value={this.text}
                                placeholder={'Enter your name'}
                                handleChange={this.handleChangeText}
                            />
                        }
                    />
                    <Question
                        q={'Select the best number :'}
                        a={
                            <Radio
                                choices={[
                                    '21',
                                    '42',
                                    '84'
                                ]}
                                handleChange={this.handleChangeRadio}
                            />
                        }
                    />
                    <Question
                        q={'Select one or more :'}
                        a={
                            <Tick
                                choices={[
                                    'Tick 1',
                                    'Tick 2',
                                    'Tick 3'
                                ]}
                            />
                        }
                    />
                    <Question
                        q={'Select one only :'}
                        a={
                            <Scroll
                                choices={[
                                    'Scroll 1',
                                    'Scroll 2',
                                    'Scroll 3'
                                ]}
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
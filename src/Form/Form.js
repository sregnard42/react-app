import React from 'react';
import styles from './Form.module.css';
import Question from '../Question/Question';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Tick from '../Tick/Tick';
import DropDown from '../DropDown/DropDown';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.init();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    init() {
        this.text = '';
        this.radio = '';
        this.tick = [];
        this.dropdown = '';
    }

    handleChangeText = (text) => {
        this.text = text;
    }

    handleChangeRadio = (radio) => {
        this.radio = radio;
    }

    handleChangeTick = (tick) => {
        for (let i = 0; i < this.tick.length; i++)
            if (this.tick[i] === tick) {
                this.tick.splice(i, 1);
                return;
            }
        this.tick.push(tick);
    }

    handleChangeDropDown = (dropdown) => {
        this.dropdown = dropdown;
    }

    getDropDown = () => {
        return this.dropdown;
    }

    checkText() {
        if (this.text === '')
            return 'Question 1 not answered\n';
        return '(OK) Answer 1 : ' + this.text + '\n';
    }

    checkRadio() {
        if (this.radio === '')
            return 'Question 2 not answered\n';
        if (this.radio === '42')
            return '(OK) Answer 2 : ' + this.radio + '\n';
        else
            return '(KO) Answer 2 : ' + this.radio + '\n';
    }

    checkTick() {
        if (this.tick.length === 0)
            return 'Question 3 not answered\n';
        for (let i = 0; i < this.tick.length; i++)
            if (this.tick[i] % 2 === 0)
                return '(KO) Answer 3 : ' + this.tick[i] + ' is not an odd number\n';
        if (this.tick.length < 2)
                return '(KO) Answer 3 : Well yes, but actually no.\n' ;
        return '(OK) Answer 3 : ' + this.tick + '\n';
    }

    checkDropDown() {
        if (this.dropdown === '')
            return 'Question 4 not answered\n';
        if (this.dropdown === '16')
            return '(OK) Answer 4 : ' + this.dropdown + '\n';
        else
            return '(KO) Answer 4 : ' + this.dropdown + '\n';
    }

    handleSubmit(event) {
        event.preventDefault();
        let output = this.checkText();
        output += this.checkRadio();
        output += this.checkTick();
        output += this.checkDropDown();
        alert(output);
    }

    handleReset() {
        this.init();
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
                        q={'Select all odd number(s) :'}
                        a={
                            <Tick
                                choices={[
                                    '13',
                                    '26',
                                    '91'
                                ]}
                                handleChange={this.handleChangeTick}
                            />
                        }
                    />
                    <Question
                        q={'What\'s the result of 4^2 ?'}
                        a={
                            <DropDown
                                choices={[
                                    '',
                                    '42',
                                    '8',
                                    '16'
                                ]}
                                handleChange={this.handleChangeDropDown}
                                selected={this.getDropDown}
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
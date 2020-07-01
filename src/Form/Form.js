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
        this.stateDefault = {
            text: '',
            radio: '',
            tick: '',
            scroll: ''
        };
        this.state = this.stateDefault;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.text);
        event.preventDefault();
    }

    handleReset() {
        this.setState(() => this.stateDefault);
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
                                value={this.state.text.value}
                                placeholder={'Enter your name'}
                                handleChange={this.handleChange}
                            />
                        }
                    />
                    <Question
                        q={'Select one only :'}
                        a={
                            <Radio
                                choices={[
                                    'radio1',
                                    'radio2',
                                    'radio3'
                                ]}
                            />
                        }
                    />
                    <Question
                        q={'Select one or more :'}
                        a={
                            <Tick
                            choices={[
                                'tick1',
                                'tick2',
                                'tick3'
                            ]}
                            />
                        }
                    />
                    <Question
                        q={'Select one only :'}
                        a={
                            <Scroll
                            choices={[
                                'scroll1',
                                'scroll2',
                                'scroll3'
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
import React from 'react';

import './styles.css';

import FillButton from './FillButton';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMC: this.props.type == 'mc'
        };
    }
    
    render() {
        return (
            <div class="qcard">
                <div class="qcard-top">
                    <div class="box">{this.props.question.question}</div>
                </div>
                <div class="qcard-bottom">
                    <div class="box">
                        {this.props.type ? 
                        this.props.question.choices.map((item, index) => (
                            <FillButton 
                                text={item.answer} // answer option text
                                active={this.props.choice == index} // choice.picked (1 or 0)
                                index={index} // index of choice
                                handleClick={this.props.handleClick}
                            />
                        )):
                        
                        <label>
                            Answer:
                            <input type='text' value={this.props.answer} onChange={this.props.answerChanged}
                            class="qcard-write"/>
                        </label>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionCard;
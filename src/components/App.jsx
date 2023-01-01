import React, { Component } from 'react';
import Statistics from './Feedback/Statistics'
import FeedbackOptions from './Feedback/FeedbackOptions'

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
    };
    
    countGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    };
    
    countNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    };
    
    countBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        const { good, neutral, bad } = this.state;
        return Math.round((good / (good + neutral + bad)) * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback()
        const positivePercentage = this.countPositiveFeedbackPercentage() 

        return (
        <>
            <h2>Please leave feedback</h2>
                
            <FeedbackOptions countGoodFeedback={this.countGoodFeedback} countNeutralFeedback={this.countNeutralFeedback} countBadFeedback={this.countBadFeedback}></FeedbackOptions>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>   
                         
        </>
        );
    }
}

export default Feedback;

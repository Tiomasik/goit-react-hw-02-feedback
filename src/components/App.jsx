import React, { Component } from 'react';

import Section from './Feedback/Section'
import Statistics from './Feedback/Statistics'
import FeedbackOptions from './Feedback/FeedbackOptions'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
    
  countFeedback = (evt) => {
    const option = evt.target.firstChild.nodeValue.toLowerCase()
    
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;

    if (good + neutral + bad === 0) {
      return 0;
    } else {
      return Math.round((good / (good + neutral + bad)) * 100);
    }
    }

    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback()
      const positivePercentage = this.countPositiveFeedbackPercentage() 

      return (
        <Section title="Please leave feedback">
          <FeedbackOptions  options={ ['Good', 'Neutral', 'Bad'] }
                            onLeaveFeedback={this.countFeedback}>
          </FeedbackOptions>
          <Statistics good={good}
                      neutral={neutral}
                      bad={bad}
                      total={total}
                      positivePercentage={positivePercentage}>
          </Statistics> 
        </Section>
        );
    }
}

export default App;

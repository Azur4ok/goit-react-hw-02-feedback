import React from 'react';

import {
  Notification,
  Section,
  FeedbackOptions,
  Statistics,
} from './components/index';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = e => {
    const option = e.target.textContent;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    return Math.round((goodFeedback / totalFeedback) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const totalPositivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="app">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickButton}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={totalPositivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

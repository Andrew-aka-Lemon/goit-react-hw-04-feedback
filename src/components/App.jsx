import React, { Component } from 'react';
import styled from 'styled-components';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = e => {
    const mark = e.currentTarget.name;

    this.setState(ps => {
      return { ...ps, [mark]: ps[mark] + 1 };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.ceil((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.feedbackHandler} />
        </Section>

        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* height: 100vh; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #010101;
`;

export { App };

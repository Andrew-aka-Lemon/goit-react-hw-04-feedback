import { useState } from 'react';
import styled from 'styled-components';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackHandler = e => {
    const mark = e.currentTarget.name;

    switch (mark) {
      case 'good':
        setGood(g => g + 1);
        break;
      case 'neutral':
        setNeutral(g => g + 1);
        break;
      case 'bad':
        setBad(g => g + 1);
        break;

      default:
        alert('Smth goes wrong !');
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.ceil((good / countTotalFeedback()) * 100);

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={feedbackHandler} />
      </Section>

      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback at the moment"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #010101;
  margin-left: 30px;
`;

export { App };

import PropTypes from 'prop-types';

import { ItemCounter } from 'components/Statistics/Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <ItemCounter>
          <p>Good :</p>
          <span>{good}</span>
        </ItemCounter>
        <ItemCounter>
          <p>Neutral :</p>
          <span>{neutral}</span>
        </ItemCounter>
        <ItemCounter>
          <p>Bad :</p>
          <span>{bad}</span>
        </ItemCounter>
        <ItemCounter>
          <p>Total :</p>
          <span>{total}</span>
        </ItemCounter>
        <ItemCounter>
          <p>Positive feedback :</p>
          <span>{total > 0 && positivePercentage} %</span>
        </ItemCounter>
      </ul>
    </>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

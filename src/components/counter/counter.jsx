// import React from 'react';


// export const FeedbackStatistics = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad;
//   const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

//   return (
//     <>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positivePercentage}%</p>
//     </>
//   );
// };


import React from 'react';
import PropTypes from 'prop-types';
import css from './counter.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map((option) => (
        <button
          className={css.buttonFeedback}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};



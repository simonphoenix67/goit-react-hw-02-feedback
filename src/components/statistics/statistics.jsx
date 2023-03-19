import React, { useState } from 'react';
import css from './statistics.module.css';


export function FeedbackWidget() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (feedback) => {
    setState((prevState) => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1
    }));
  };

  return (
    <div className={css.mainCounter}>
      <h2 className={css.feedback}>Leave feedback</h2>
      <button className={css.buttonFeedback} onClick={() => handleFeedback('good')}>Good</button>
      <button className={css.buttonFeedback} onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button className={css.buttonFeedback} onClick={() => handleFeedback('bad')}>Bad</button>
      <h2 className={css.statisticsHeader}>Statistics</h2>
      <div className={css.statisticsCounter}>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      </div>
    </div>
  );
}

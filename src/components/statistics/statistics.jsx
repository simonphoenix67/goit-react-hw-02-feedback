import React, { useState } from 'react';

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
    <div>
      <h2>Leave feedback</h2>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
    </div>
  );
}

import React from 'react';


export const FeedbackStatistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

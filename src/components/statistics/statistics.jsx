// import React, { Component } from 'react';
// import css from './statistics.module.css';
// import {FeedbackStatistics} from '../counter/counter';


// export class FeedbackWidget extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleFeedback = (feedback) => {
//     this.setState((prevState) => ({
//       ...prevState,
//       [feedback]: prevState[feedback] + 1
//     }));
//   };


//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div className={css.mainCounter}>
//         <h2 className={css.feedback}>Leave feedback</h2>
//         <button className={css.buttonFeedback} onClick={() => this.handleFeedback('good')}>Good</button>
//         <button className={css.buttonFeedback} onClick={() => this.handleFeedback('neutral')}>Neutral</button>
//         <button className={css.buttonFeedback} onClick={() => this.handleFeedback('bad')}>Bad</button>
//         <h2 className={css.statisticsHeader}>Statistics</h2>
//         {good + neutral + bad === 0 ? (
//           <p>No feedback given</p>
//         ) : (
//           <>
//                 <ul className={css.statisticsCounter}>
//                   <li>Good: {this.state.good}</li>
//                   <li>Neutral: {this.state.neutral}</li>
//                   <li>Bad: {this.state.bad}</li>
//               </ul>
//               <FeedbackStatistics good={good} neutral={neutral} bad={bad} />
//           </>
//         )}
//       </div>
//     );
//   }

// }


// import React from 'react';
// import css from './statistics.module.css';

// export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
//   <>
//     <h2 className={css.statisticsHeader}>Statistics</h2>
//     {total === 0 ? (
//       <p>No feedback given</p>
//     ) : (
//       <ul className={css.statisticsCounter}>
//         <li>Good: {good}</li>
//         <li>Neutral: {neutral}</li>
//         <li>Bad: {bad}</li>
//         <li>Total: {total}</li>
//         <li>Positive feedback: {positivePercentage}%</li>
//       </ul>
//     )}
//   </>
// );

import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticsCounter}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};



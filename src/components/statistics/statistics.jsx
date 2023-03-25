import React, { Component } from 'react';
import css from './statistics.module.css';
import {FeedbackStatistics} from '../counter/counter';


export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (feedback) => {
    this.setState((prevState) => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1
    }));
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback();
  //   return total === 0 ? 0 : Math.round((good / total) * 100);
  // };

  render() {
    // const totalFeedback = this.countTotalFeedback();
    // const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.mainCounter}>
        <h2 className={css.feedback}>Leave feedback</h2>
        <button className={css.buttonFeedback} onClick={() => this.handleFeedback('good')}>Good</button>
        <button className={css.buttonFeedback} onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button className={css.buttonFeedback} onClick={() => this.handleFeedback('bad')}>Bad</button>
        <h2 className={css.statisticsHeader}>Statistics</h2>
        {good + neutral + bad === 0 ? (
          <p>No feedback given</p>
        ) : (
          <>
                <ul className={css.statisticsCounter}>
                  <li>Good: {this.state.good}</li>
                  <li>Neutral: {this.state.neutral}</li>
                  <li>Bad: {this.state.bad}</li>

                  {/* <li>Total: {totalFeedback}</li>
                  <li>Positive feedback: {positiveFeedbackPercentage}%</li> */}

              </ul>
              <FeedbackStatistics good={good} neutral={neutral} bad={bad} />
          </>
        )}
      </div>
    );
  }

}


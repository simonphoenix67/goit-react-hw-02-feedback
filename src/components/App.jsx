import { FeedbackWidget } from './statistics/statistics';
// import FeedbackStatistics from './counter/counter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackWidget />
      {/* <FeedbackStatistics good={good} neutral={neutral} bad={bad} /> */}
    </div>
  );
};

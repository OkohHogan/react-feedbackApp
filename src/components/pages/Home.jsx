import React from 'react';
import FeedbackList from "../FeedbackList";
import FeedbackStat from "../FeedbackStat";
import FeedbackForm from '../FeedbackForm';

function Home() {

  return (
    <div>
      <FeedbackForm />
        <FeedbackStat  />
        <FeedbackList />
    </div>
  );
}

export default Home;

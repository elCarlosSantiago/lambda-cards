import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { restartSession } from '../actions';

function ConclusionPage(props) {
  const history = useHistory();

  const handleRestart = e => {
    e.preventDefault();
    props.restartSession();
    // Need to re-fetch the data so it scrambles
    history.push("/cards")
  };

  return (
    <div className="home-container">
      <h2 className="diamond-hands">💎 🙌 🚀 🌝</h2>
      <h1>Great work!</h1>
      <p className="tagline">
        Take a well deserved break and come back for some more reps when you're ready
      </p>
      <button className="start-button" onClick={handleRestart}>Go Again &#8594;</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    questionCounter: state.questionCounter
  };
};

export default connect(mapStateToProps, { restartSession })(ConclusionPage);
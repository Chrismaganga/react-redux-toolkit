import { useState } from "react";
import { useSelector } from "react-redux";
import PollList from "./PollList";

const Home = () => {
  const [showUnanswered, setShowUnanswered] = useState(true);
  const polls = useSelector((state) => state.polls) || {};
  const userId = useSelector((state) => state.auth.currentUser);

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="home-buttons">
        <button
          className={`home-button ${showUnanswered ? "active" : ""}`}
          onClick={() => setShowUnanswered(true)}
        >
          Unanswered Polls
        </button>
        <button
          className={`home-button ${!showUnanswered ? "active" : ""}`}
          onClick={() => setShowUnanswered(false)}
        >
          Answered Polls
        </button>
      </div>
      <PollList polls={polls} userId={userId} isAnswered={!showUnanswered} />
    </div>
  );
};

export default Home;

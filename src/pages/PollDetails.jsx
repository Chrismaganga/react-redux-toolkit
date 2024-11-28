import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { answerQuestion } from "../features/questions/questionSlice";

const PollDetails = () => {
  const { question_id } = useParams();
  const poll = useSelector((state) => state.questions.questions.find(q => q.id === question_id));
  const userId = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const handleVote = (option) => {
    dispatch(answerQuestion({ authedUser: userId, qid: question_id, answer: option }));
  };

  if (!poll) return <h2 className="not-found">404 - Poll Not Found</h2>;

  return (
    <div className="poll-details-container">
      <h2 className="poll-title">Would You Rather</h2>
      <p className="poll-author">Created by: {poll.author}</p>
      <div className="poll-options">
        <button
          className="poll-button option-one"
          onClick={() => handleVote("optionOne")}
        >
          {poll.optionOne.text}
        </button>
        <button
          className="poll-button option-two"
          onClick={() => handleVote("optionTwo")}
        >
          {poll.optionTwo.text}
        </button>
      </div>
    </div>
  );
};

export default PollDetails;

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PollCard = ({ poll, author, isAnswered }) => {
  const navigate = useNavigate();

  // Navigate to poll details
  const handleClick = () => {
    navigate(`/polls/${poll.id}`);
  };

  return (
    <div className="poll-card">
      <div className="poll-header">
        <h3>{author.name} asks:</h3>
      </div>
      <div className="poll-body">
        <div className="poll-avatar">
          <img
            src={author.avatarURL}
            alt={`${author.name}'s avatar`}
            className="avatar"
          />
        </div>
        <div className="poll-content">
          <p>Would you rather...</p>
          <p className="poll-option">...{poll.optionOne.text}...</p>
          <button onClick={handleClick} className="view-poll-button">
            {isAnswered ? "View Results" : "Answer Poll"}
          </button>
        </div>
      </div>
    </div>
  );
};

PollCard.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.string.isRequired,
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  }).isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
  }).isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default PollCard;

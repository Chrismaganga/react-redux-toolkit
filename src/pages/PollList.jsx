;
import { useSelector } from "react-redux";
import PollCard from "./PollCard";
import PropTypes from 'prop-types';

const PollList = ({ isAnswered }) => {
  const polls = useSelector((state) => state.polls.entities) || {};
  const users = useSelector((state) => state.users.entities) || {};
  const authedUser = useSelector((state) => state.auth.user);

  const filteredPolls = Object.values(polls).filter((poll) => {
    const hasAnswered = Object.keys(poll.optionOne.votes)
      .concat(Object.keys(poll.optionTwo.votes))
      .includes(authedUser);
    return isAnswered ? hasAnswered : !hasAnswered;
  });

  return (
    <div className="poll-list">
      {filteredPolls.map((poll) => (
        <PollCard
          key={poll.id}
          poll={poll}
          author={users[poll.author]}
          isAnswered={isAnswered}
        />
      ))}
    </div>
  );
};
PollList.propTypes = {
  isAnswered: PropTypes.bool.isRequired,
};

export default PollList;


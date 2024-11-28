import { useSelector } from "react-redux";

const Leaderboard = () => {
  const users = useSelector((state) => state.users.users);

  const leaderboard = Object.values(users).map((user) => ({
    name: user.name,
    questions: user.questions.length,
    answers: Object.keys(user.answers).length,
    total: user.questions.length + Object.keys(user.answers).length,
  })).sort((a, b) => b.total - a.total);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <ul className="leaderboard-list">
        {leaderboard.map((user, index) => (
          <li className="leaderboard-item" key={index}>
            <span className="leaderboard-rank">{index + 1}</span>
            <span className="leaderboard-name">{user.name}</span>
            <span className="leaderboard-questions">Questions: {user.questions}</span>
            <span className="leaderboard-answers">Answers: {user.answers}</span>
            <span className="leaderboard-total">Total: {user.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

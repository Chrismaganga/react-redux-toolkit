import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewQuestion } from "../features/questions/questionSlice";

const NewPoll = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (optionOne && optionTwo) {
      dispatch(addNewQuestion({ optionOne, optionTwo }));
      setOptionOne("");
      setOptionTwo("");
    }
  };

  return (
    <div className="new-poll-container">
      <h1 className="new-poll-title">Create Poll</h1>
      <input
        className="poll-input"
        placeholder="Option One"
        value={optionOne}
        onChange={(e) => setOptionOne(e.target.value)}
      />
      <input
        className="poll-input"
        placeholder="Option Two"
        value={optionTwo}
        onChange={(e) => setOptionTwo(e.target.value)}
      />
      <button className="poll-submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default NewPoll;

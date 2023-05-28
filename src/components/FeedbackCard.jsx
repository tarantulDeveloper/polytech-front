import React, { useEffect } from "react";

const FeedbackCard = ({feedback}) => {
    useEffect(() => {printMe(feedback)}, [])
    const printMe = (feedback) => {console.log(feedback)}
  return (
    <div className="col-sm-12 col-md-4">
      <div className="border border-1 border-primary rounded p-2 d-flex flex-column">
        <h5>{feedback.name}</h5>
        <p>Оценка: {feedback.rating}</p>
        <p>{feedback.text}</p>
        <p className="ms-auto me-0 mb-1">{feedback.date}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;

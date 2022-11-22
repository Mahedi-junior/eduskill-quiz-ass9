import React from "react";

const Questions = ({ question }) => {
  //   const { question } = question;
  console.log(question.question);
  return (
    <div>
      <h4>{question.question}</h4>
    </div>
  );
};

export default Questions;

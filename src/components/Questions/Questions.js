import React from "react";
import "./Questions.css";

const Questions = ({ questionProps }) => {
  const { question } = questionProps;
  console.log(question);
  return (
    <div>
      <h4>{question}</h4>
    </div>
  );
};

export default Questions;

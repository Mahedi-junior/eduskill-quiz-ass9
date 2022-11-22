import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const { name, questions } = quizDetails?.data;
  console.log(name, questions);
  return (
    <div>
      <h2>Questions of {name}</h2>
      {questions.map((question) => (
        <Questions key={question.id} question={question}></Questions>
      ))}
    </div>
  );
};

export default QuizDetails;

import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const { name, questions } = quizDetails?.data;
  console.log(name, questions);
  return (
    <div>
      <h2>Questions of {name}</h2>
    </div>
  );
};

export default QuizDetails;

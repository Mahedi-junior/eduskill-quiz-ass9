import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import QuestionMark from "../QuestionMarks/QuestionMark";
import Questions from "../Questions/Questions";

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const { name, questions } = quizDetails?.data;
  const [wrightAns, setWrightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  console.log(name, questions);

  return (
    <div className="container quiz-detail">
      <div className="row">
        <div className="question-container col-sm-9">
          <h1 className="mt-4">Questions of {name}</h1>
          <Row xs={1} md={1} lg={1} className="g-4">
            {questions.map((question, index) => (
              <Questions
                index={index}
                key={question.id}
                questionProps={question}
                setWrightAns={setWrightAns}
                setWrongAns={setWrongAns}
                wrightAns={wrightAns}
                wrongAns={wrongAns}
              ></Questions>
            ))}
          </Row>
        </div>
        <div className="question-marks-container col-sm-3">
          <QuestionMark
            wrightAns={wrightAns}
            wrongAns={wrongAns}
          ></QuestionMark>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;

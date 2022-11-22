import React from "react";
import { Col, Row } from "react-bootstrap";
import QuestionOption from "../QuestionOption/QuestionOption";
import "./Questions.css";

const Questions = ({
  questionProps,
  index,
  setWrightAns,
  setWrongAns,
  wrightAns,
  wrongAns,
}) => {
  const { question, options, correctAnswer } = questionProps;
  //   console.log(setWrightAns);
  return (
    <Col>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="question-container d-flex mb-3 fw-bold justify-content-between">
          <div className="d-flex">
            <div className="question-no">Question {index + 1}:</div>
            <div>{question}</div>
          </div>
          {/* <FontAwesomeIcon
            onClick={seeCorrectAnswer}
            className="eye-icon"
            icon={faEye}
          /> */}
        </div>
        <div className="options-container">
          <Row xs={1} md={1} lg={1} className="g-4">
            {options.map((option, idx) => (
              <QuestionOption
                index={index}
                key={idx}
                option={option}
                // handleAnswer={handleAnswer}
              ></QuestionOption>
            ))}
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default Questions;

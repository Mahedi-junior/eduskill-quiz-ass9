import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quizObj = useLoaderData();
  const { data: quizList } = quizObj;

  console.log(quizList);
  return (
    <div>
      <Container>
        <h3 className="my-5 fs-1">Test your frontend development quiz.</h3>
        <Row xs={1} md={2} lg={4} className="4">
          {quizList.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz}></Quiz>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

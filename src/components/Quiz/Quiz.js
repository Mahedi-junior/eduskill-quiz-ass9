import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
  const { id, logo, name, total } = quiz;
  return (
    <div className="quiz">
      <Col className="ca mt-4 ">
        <Card>
          <Card.Img className="bg-light" variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <small> Questions: {total} </small> <br />
              <Link className="flex" to={`/quiz/${id}`}>
                <Button className="mt-2 px-3" variant="success">
                  Start Quiz
                </Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Quiz;

import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="p-3">
      <h1 className="">React Important Question</h1>
      <Container className="mt-5 px-5">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p className="fw-bold text-success ">
                #1. What is the purpose of react router?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p className="fw-bold text-success">
                #2..How does context api work ?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Context is a built-in API introduced in ​​React 16.3. It makes
                it possible to pass data from parent to children nested deep
                down the component tree directly, instead of passing it down
                through a chain of props
              </p>
              <p>
                A context contains references to variables and notifies its
                consumers when these references are changed. There are no
                restrictions on what type of values you can provide, so you can
                easily pass in functions that can be used to communicate events
                back from consumers, for example.
              </p>
              <p>
                To create a context, call the createContext function with an
                arbitrary value. This will be the default value provided to the
                consumers. Optionally provide an interface describing your
                provided object. The returned object will contain helper
                components you need to provide or consume this context.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <p className="fw-bold text-success">#3..Explain useRef Hook</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="">
                <p className="fw-bold">
                  useRef is a React Hook that lets you reference a value that’s
                  not needed for rendering.
                </p>
                <strong>Usage of useRef Hook </strong>
                <p>Referencing a value with a ref</p>
                <p>Manipulating the DOM with a ref</p>
                <p>Avoiding recreating the ref contents</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;

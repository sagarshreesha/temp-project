import "./App.css";
import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Form, Button } from "react-bootstrap";
import moment from "moment";
function App() {
  // States for UI - No need to care
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  // These states contain the actual information
  let [session, setSession] = useState("Sessions : \n");
  let [project, setProject] = useState("Project Related : \n");
  let [learning, setLearning] = useState("Learnings : \n");

  let finalizeStuff = () => {
    // You have to complete this function
  };

  const firstClick = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };
  const secondClick = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };
  const bullet = "\u2022";
  const bulletWithSpace = `${bullet} `;
  const enter = 13;

  const handleInput = (event) => {
    const { keyCode, target } = event;
    const { selectionStart, value } = target;

    if (keyCode === enter) {
      console.log("a");
      target.value = [...value]
        .map((c, i) => (i === selectionStart - 1 ? `\n${bulletWithSpace}` : c))
        .join("");
      console.log(target.value);

      target.selectionStart = selectionStart + bulletWithSpace.length;
      target.selectionEnd = selectionStart + bulletWithSpace.length;
    }

    if (value[0] !== bullet) {
      target.value = `${bulletWithSpace}${value}`;
    }
  };
  let today = moment().format("MMMM Do YYYY");

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron
              fluid
              style={{ backgroundColor: "#121212", color: "#ffffff" }}
            >
              <Container style={{ textAlign: "left" }}>
                <h1 style={{ fontWeight: "bold" }}>Daily Tracker ++</h1>
                <p style={{ lineHeight: "30px" }}>
                  Fill up these simple questions and track your work like a pro.
                  <br />
                  Never worry about managing your trackers, this'll take care of
                  it.
                </p>
                <br />
                <p>
                  Today's Date : <b>{today}</b>
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container style={{ color: "#ffffff" }}>
        <Row>
          <Col xs={2}>
            <Row>
              <Col style={{ borderRight: "1px solid #303030" }}>
                <div
                  onClick={() => {
                    setFirst(true);
                    setSecond(false);
                    setThird(false);
                  }}
                >
                  <div
                    class="mx-auto mt-4 circle"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: `${first ? "#3784aa" : "#474747"}`,
                    }}
                  >
                    1
                  </div>
                  <div>
                    <p style={{ fontWeight: "500", marginTop: "10px" }}>
                      Sessions
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                style={{ borderRight: "1px solid #303030", paddingTop: "50px" }}
                onClick={() => {
                  setFirst(false);
                  setSecond(true);
                  setThird(false);
                }}
              >
                <div>
                  <div
                    class="mx-auto mt-4 circle"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: `${second ? "#3784aa" : "#474747"}`,
                    }}
                  >
                    2
                  </div>
                  <div>
                    <p style={{ fontWeight: "500", marginTop: "10px" }}>
                      Project
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                style={{ borderRight: "1px solid #303030", paddingTop: "50px" }}
                onClick={() => {
                  setFirst(false);
                  setSecond(false);
                  setThird(true);
                }}
              >
                <div>
                  <div
                    class="mx-auto mt-4 circle"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: `${third ? "#3784aa" : "#474747"}`,
                    }}
                  >
                    3
                  </div>
                  <div>
                    <p style={{ fontWeight: "500", marginTop: "10px" }}>
                      Learnings
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col style={{ paddingLeft: "100px" }}>
            {first && (
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label style={{ fontWeight: "500" }}>
                    What sessions did you attend today ?
                  </Form.Label>
                  <Form.Control
                    className="mt-2 area"
                    as="textarea"
                    placeholder="Attended AI/ML session by John Doe"
                    rows={4}
                    onKeyUp={handleInput}
                    onChange={(e) => setSession(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    float: "left",
                    backgroundColor: "#3784aa",
                    border: "none",
                    fontWeight: "500",
                  }}
                  variant="primary"
                  className="mt-2"
                  onClick={firstClick}
                >
                  Next
                </Button>
              </Form>
            )}
            {second && (
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label style={{ fontWeight: "500" }}>
                    What project related work did you do today ?
                  </Form.Label>
                  <Form.Control
                    className="mt-2 area"
                    as="textarea"
                    placeholder="Completed testing database integration"
                    rows={4}
                    onKeyUp={handleInput}
                    onChange={(e) => setProject(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    float: "left",
                    backgroundColor: "#3784aa",
                    border: "none",
                    fontWeight: "500",
                  }}
                  variant="primary"
                  className="mt-2"
                  onClick={secondClick}
                >
                  Next
                </Button>
              </Form>
            )}
            {third && (
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label style={{ fontWeight: "500" }}>
                    What learnings did you complete today ?
                  </Form.Label>
                  <Form.Control
                    className="mt-2 area"
                    as="textarea"
                    placeholder="Completed a course on Kubernetes"
                    rows={4}
                    onKeyUp={handleInput}
                    onChange={(e) => setLearning(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    float: "left",
                    backgroundColor: "#3784aa",
                    border: "none",
                    fontWeight: "500",
                  }}
                  variant="primary"
                  type="submit"
                  className="mt-2"
                  onClick={finalizeStuff}
                >
                  Finish
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

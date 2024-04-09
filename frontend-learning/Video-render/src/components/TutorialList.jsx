import React from "react";
import { Container } from "react-bootstrap";
import TopicList from "./TopicList";

function TutorialList() {
  const data = [
    {
      name: "Personality",
      id: "rH7OpFjlc4U",
    },
    {
      name: "Why Personality?",
      id: "rH7OpFjlc4U",
    },
    {
      name: "What Personality?",
      id: "rH7OpFjlc4U",
    },
    {
      name: "How Personality?",
      id: "rH7OpFjlc4U",
    },
    {
      name: "When Personality?",
      id: "rH7OpFjlc4U",
    },
    {
      name: "Where Personality?",
      id: "rH7OpFjlc4U",
    },
    {
      name: "Whose Personality?",
      id: "rH7OpFjlc4U",
    },
  ];

  return (
    <>
      <center className="mt-3 ">
        <h1>Personality Development Tutorial</h1>
      </center>
      <Container className="mt-5">
        <TopicList data={data} />
      </Container>
    </>
  );
}

export default TutorialList;

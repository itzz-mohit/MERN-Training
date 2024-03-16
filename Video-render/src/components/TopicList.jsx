import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopicList = ({ data }) => {
  return (
    <Row>
      <Col md={{ offset: 0 }}>
        <ListGroup>
          {data.map((value, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {value.name}
              <Link to={"/video?id=" + value.id}>
                <Button variant="danger">Click here</Button>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default TopicList;



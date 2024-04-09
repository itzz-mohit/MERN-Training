import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function VideoCard({ data }) {
  const id = data.id.videoId;
  return (
    <Link to={"/video?id=" + id} style={{ textDecoration: "none" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.snippet.thumbnails.medium.url} />
        <Card.Body>
          <Card.Title>{data.snippet.title}</Card.Title>
          <Card.Text>{data.snippet.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default VideoCard;

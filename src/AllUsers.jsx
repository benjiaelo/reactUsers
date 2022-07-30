import React from "react";
import Card from "react-bootstrap/Card";

export default function allUsers(props) {
  return (
    <div>
      {props.userData.map((user, index) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {user.phone}
              </Card.Subtitle>
              <Card.Text>{user.location}</Card.Text>
              <Card.Link href="#">Edit Profile</Card.Link>
              <Card.Link href="#">Delete Profile</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

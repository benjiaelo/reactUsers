import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import AddUserForm from "./AddUserForm";
import AllUsers from "./AllUsers";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState([
    {
      name: "Zidan",
      phone: "0245339920",
      location: "Madina",
    },

    {
      name: "Kareem",
      phone: "050337728",
      location: "Airport City",
    },

    {
      name: "Salah",
      phone: "027229927",
      location: "Osu",
    },
  ]);
  const AddNewUser = (users) => {
    setUser([
      ...user,
      { name: users.name, phone: users.phone, location: users.location },
    ]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <AddUserForm retrieve={AddNewUser} />
          </Col>

          <Col md={6}>
            <AllUsers userData={user} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

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
      email: "zidan.com",
      gen: 21,
    },

    {
      name: "Kareem",
      email: "kareem.com",
      gen: 22,
    },

    {
      name: "Salah",
      email: "salah.com",
      gen: 28,
    },
  ]);
  const AddNewUser = (users) => {
    setUser([
      ...user,
      { name: users.name, email: users.email, gen: users.gen },
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

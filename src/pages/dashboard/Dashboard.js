import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Container fluid>
        <Row>
          <Col sm="3" className=" side-bar">
            <Sidebar />
          </Col>
          <Col sm="9">
            <h5 className="mt-2">Dashboard</h5>
            <hr />
            <div className="page-content d-flex gap-2">
              <Card style={{ width: "18rem" }}>
                <Card.Body>Account status : Action</Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  Active Burrowed <span className="fw-bold fs-2">3</span>{" "}
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  Total Burrowed <span className="fw-bold fs-2">30</span>{" "}
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;

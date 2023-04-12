import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { BurrowHistoryTable } from "../../components/book-table/BurrowHistoryTable";

const BurrowHistory = () => {
  return (
    <AdminLayout>
      <Container fluid>
        <Row>
          <Col sm="3" className=" side-bar">
            <Sidebar />
          </Col>
          <Col>
            <div className="mt-2">
              <h3>Borrow history</h3>
            </div>
            <hr />

            <BurrowHistoryTable />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export default BurrowHistory;

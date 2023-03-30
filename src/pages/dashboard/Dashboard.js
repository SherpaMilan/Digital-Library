import React from "react";
import { Container } from "react-bootstrap";
import { AdminLayout } from "../../components/layout/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Container>
        <h5 className="mt-5">Dashboard</h5>
        <hr />
        <div className="page-content">todo</div>
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;

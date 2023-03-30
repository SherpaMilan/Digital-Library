import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header goes here */}
      <Header />
      <div className="main">{children}</div>
      {/* footer goes here */}
      <Footer />
    </div>
  );
};

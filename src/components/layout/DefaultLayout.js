import React, { useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const DefaultLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

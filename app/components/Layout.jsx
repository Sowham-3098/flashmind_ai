import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

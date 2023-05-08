import React from "react";
import NavBar from "../component/NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <section className="">
      <NavBar />
      <div className="flex w-full justify-between h-[calc(100vh-74px)]">
        {children}
      </div>
    </section>
  );
};

export default MainLayout;

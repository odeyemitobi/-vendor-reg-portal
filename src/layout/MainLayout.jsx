import React from "react";
import Signup from "../pages/main/Signup";
import NavBar from "../component/NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <section className="">
      <NavBar />
      <div className="flex w-full justify-between">
        <Signup />
      </div>
    </section>
  );
};

export default MainLayout;

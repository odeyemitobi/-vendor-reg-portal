import React from "react";
import StaffNavbar from './../component/NavBar/StaffNavbar';

const StaffLayout = ({ children }) => {
  return (
    <section className="">
      <StaffNavbar />
      <div className="flex w-full justify-between">{children}</div>
    </section>
  );
};

export default StaffLayout;

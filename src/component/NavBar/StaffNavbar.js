import React from "react";
import "../components.css";
import { useNavigate } from "react-router";
import FIDELITY from "../../Assets/img/Fidelity.png";

function StaffNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full justify-between border-2 bg-[#F8F8F8] p-5">
      <div className="bg-[#F8F8F8]">
        <img className="h-6" src={FIDELITY} alt="" />
      </div>
      <div
        className="text-[20px] font-bold text-[#23232399]"
        onClick={() => navigate("/")}
      >
        <p>Staff Portal</p>
      </div>
    </nav>
  );
}

export default StaffNavbar;

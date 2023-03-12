import React from "react";
import "../components.css";
import FIDELITY from "../../Assets/img/Fidelity.png";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full justify-between border-2 bg-[#F8F8F8] p-5">
      <div className="bg-[#F8F8F8]">
        <img className="h-6" src={FIDELITY} alt="" />
      </div>
      <div
        className="cursor-pointer text-[20px] font-bold text-[#23232399]"
        onClick={() => navigate("/staffportal")}
      >
        <p>Vendor Portal</p>
      </div>
    </nav>
  );
}

export default NavBar;

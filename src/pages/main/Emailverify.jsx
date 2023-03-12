import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useNavigate } from "react-router";
import ETAX from "../../Assets/pic/Etax.png";
import MAIL from "../../Assets/img/Mail.png";

function Emailverify() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="w-full font-sans">
        <div className="w-full text-center">
          <div className="mt-14 w-full text-2xl">
            <h1 className="text-[#343434]">Congratulations</h1>
          </div>
          <div className="mt-14">
            <img
              className="ml-auto mr-auto block h-[410px]"
              src={MAIL}
              alt=""
            />
          </div>
          <div className="mt-9 text-xl">
            <h1 className="text-[#343434]">
              Your Email Address has been successfully Verified
            </h1>
            <p
              onClick={() => navigate("/login")}
              className="text-[#0E237E] cursor-pointer"
            >
              Click here to complete your registration.
            </p>
          </div>
        </div>
        <div className="mt-[7rem] mb-3 flex w-full justify-between px-7">
          <div className="text-[14px]">
            <p>RC 103022</p>
            <p>
              Copyright 2019 Fidelity Bank Plc. An authorised financial services
              and credit provider.
            </p>
            <p>
              Website Terms & Conditions | Disclaimer, Privacy & Security |
              Communication Policy | Sitemap
            </p>
          </div>
          <div>
            <img className="h-11" src={ETAX} alt="" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Emailverify;

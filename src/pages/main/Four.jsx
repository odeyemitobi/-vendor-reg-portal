import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useNavigate } from "react-router";
import ETAX from "../../Assets/pic/Etax.png";
import FOUR from "../../Assets/img/Four.png";
import Home from "../../component/Button/Home";

function Four() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="w-full font-sans">
        <div className="w-full text-center">
          <div className="mt-14 w-full text-3xl font-semibold">
            <h1 className="text-[#343434]">Sorry, Page not found</h1>
          </div>
          <div className="mt-14">
            <img
              className="ml-auto mr-auto block h-[410px]"
              src={FOUR}
              alt=""
            />
          </div>
          <div
            onClick={() => navigate("/login")}
            className="mt-9 text-xl"
          >
            <Home />
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

export default Four;

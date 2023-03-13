import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import ETAX from "../../Assets/pic/Etax.png";
import { useNavigate } from "react-router";
import { FiLock } from "react-icons/fi";
import Verifybtn from "./../../component/Button/Verifybtn";

function Verifycode() {
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pass);
  };
  return (
    <MainLayout>
      <div className="w-full font-sans">
        <div className="w-full">
          <div className="">
            <div className="mt-[11rem] mb-[-0.5rem] ml-auto mr-auto w-[50%] bg-[#F8F8F8]">
              <div className="w-full text-center">
                <h1 className="pt-8 text-[24px] font-semibold">
                  Verification Code
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="w-full pl-[3rem] pb-[5rem]"
                >
                  <div className="mt-[3.5rem] flex flex-col">
                    <label
                      className="mb-1 pl-2 text-left text-sm tracking-wide text-[#343434]"
                      htmlFor="password"
                    >
                      INPUT CODE
                    </label>
                    <div className="w-[90%]">
                      <div className="absolute px-6 py-3 text-center text-[24px]">
                        <FiLock />
                      </div>
                      <input
                        className="w-full rounded-sm p-3 pl-[4.5rem] font-sans text-[18px] italic"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="* * * * * * *"
                      />
                    </div>
                  </div>
                  <div
                    className="mt-8 w-full text-left"
                    onClick={() => navigate("/emailverify")}
                  >
                    <Verifybtn />
                  </div>
                </form>
              </div>
            </div>
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

export default Verifycode;

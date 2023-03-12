import React, { useState } from "react";
import StaffLayout from "../../layout/StaffLayout";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import STAFFETAX from "../../Assets/pic/Staffetax.png";
import Loginbutton from "../../component/Button/Loginbutton";

function Staffportal() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <StaffLayout>
      <div className="staff w-full font-sans">
        <div className="mt-[11rem] mb-[-0.5rem] ml-auto mr-auto w-[50%] bg-[#F8F8F8]">
          <div className="w-full pt-9 text-center text-2xl font-semibold text-[#343434]">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full pl-[5rem] pb-[5rem]">
            <div className="mt-[3.5rem] flex flex-col">
              <label
                className="mb-1 pl-2 text-left text-sm tracking-wide text-[#343434]"
                htmlFor="emailaddress"
              >
                EMAIL:
              </label>
              <div className="w-[80%]">
                <div className="absolute px-6 py-3 text-center text-[24px]">
                  <FiUser />
                </div>
                <input
                  className="w-full rounded-sm p-3 pl-[4.5rem] font-sans text-[18px] italic"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="moosteebeasty@fidelitybank.ng"
                />
              </div>
            </div>
            <div className="mt-[3.5rem] flex flex-col">
              <label
                className="mb-1 pl-2 text-left text-sm tracking-wide text-[#343434]"
                htmlFor="password"
              >
                PASSWORD:
              </label>
              <div className="w-[80%]">
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
            <div className="pt-[3.5rem] text-left">
              <Loginbutton />
            </div>
          </form>
        </div>
        <div className="mt-10 mb-3 flex w-full justify-between px-7 pt-[6rem]">
          <div className="text-left text-[14px] text-white">
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
            <img className="h-11" src={STAFFETAX} alt="" />
          </div>
        </div>
      </div>
    </StaffLayout>
  );
}

export default Staffportal;

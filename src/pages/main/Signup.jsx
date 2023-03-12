import React, { useState } from "react";
import { useNavigate } from "react-router";
import WOMAN from "../../Assets/img/woman.png";
import ETAX from "../../Assets/pic/Etax.png";
import RECTANGLE from "../../Assets/pic/Rectangle.png";
import Button from "../../component/Button/Button";
import MainLayout from "../../layout/MainLayout";

function Signup() {
  const [account, setAccount] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConpass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account);
  };

  return (
    <MainLayout>
      <div className="flex w-full">
        <div className="w-full pt-[6rem] pl-[2rem] text-center">
          <div className="w-full ">
            <h3 className="interest text-3xl font-semibold text-[#0E237E]">
              Interested in being a <br /> Vendor of Fidelity Bank Plc?
            </h3>
            <p className="mt-2 font-sans text-base text-[#343434cc]">
              Business that wish to conduct business with <br /> Fidelity Bank
              Plc in Nigeria need to be registered with the company
            </p>
          </div>
          <div className="mt-12 w-full">
            <img
              className="ml-auto mr-auto block h-[22rem]"
              src={WOMAN}
              alt=""
            />
          </div>
          <div className="mt-[7rem] mb-2 text-left font-sans text-[13px] leading-5 text-[#343434]">
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
        </div>
        <div className="w-full bg-[#F8F8F8]">
          <div className="w-full p-[4rem] font-sans ">
            <div className="flex w-full pl-2">
              <div
                className="w-1/6 text-2xl text-[#343434] cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </div>
              <div className="w-2/3 text-2xl font-semibold text-[#343434]">
                <div className="pl-1">Sign Up</div>
                <img className="mt-1 w-[29%]" src={RECTANGLE} alt="" />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="">
              <div className="mt-[3.5rem] flex flex-col">
                <label
                  className="mb-1 pl-2 font-sans text-sm tracking-wide text-[#343434]"
                  htmlFor="accountnumber"
                >
                  ACCOUNT NUMBER
                </label>
                <input
                  className="rounded-sm p-3 pl-4 italic"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  type="accountnumber"
                  placeholder="50501623495"
                />
              </div>
              <div className="mt-9 flex flex-col">
                <label
                  className="mb-1 pl-2 text-sm text-[#343434]"
                  htmlFor="password"
                >
                  PASSWORD:
                </label>
                <input
                  className="rounded-sm p-3 pl-4 italic"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="* * * * * * *"
                />
              </div>
              <div className="mt-9 flex flex-col">
                <label
                  className="mb-1 pl-2 text-sm text-[#343434]"
                  htmlFor="confirmpassword"
                >
                  CONFIRM PASSWORD:
                </label>
                <input
                  className="rounded-sm p-3 pl-4 italic"
                  value={conpass}
                  icon=""
                  onChange={(e) => setConpass(e.target.value)}
                  type="password"
                  placeholder="* * * * * * *"
                />
              </div>
              <div className="mt-9" onClick={() => navigate("/emailverify")}>
                <Button />
              </div>
              <div>
                <p className="mt-2 text-base font-semibold text-[#343434]">
                  Already have an account?{" "}
                  <b
                    className="font-bold text-[#5166D4] cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </b>
                </p>
              </div>
            </form>
          </div>
          <div className="mt-[7rem]">
            <img className="ml-auto mr-6 h-11" src={ETAX} alt="" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Signup;

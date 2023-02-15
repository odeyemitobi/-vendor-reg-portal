import React from "react";
import "../components.css";
import FIDELITY from "../../Assets/img/Fidelity.png";
import WOMAN from "../../Assets/img/woman.png";

function NavBar() {
  return (
    <section className="">
      <nav className="flex w-full justify-between border-2 bg-[#F8F8F8] p-5">
        <div className="bg-[#F8F8F8]">
          <img className="h-6" src={FIDELITY} alt="" />
        </div>
        <div className="text-[20px] font-bold text-[#23232399]">
          <p>Vendor Portal</p>
        </div>
      </nav>
      <div className="flex w-full justify-between">
        <div className="w-full pt-[6rem] pl-[2rem] text-center">
          <div className="w-full ">
            <h3 className="interest text-3xl font-semibold text-[#0E237E]">
              Interested in being a <br /> Vendor of Fidelity Bank Plc?
            </h3>
            <p className="mt-2 text-base font-normal text-[#343434cc]">
              Business that wish to conduct business with <br /> Fidelity Bank
              Plc in Nigeria need to be registered with the company
            </p>
          </div>
          <div className="mt-12 w-full pl-[10rem]">
            <img className="h-[22rem]" src={WOMAN} alt="" />
          </div>
          <div className="mt-16 text-left text-[11px] font-normal leading-5 text-[#343434]">
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
        <div className="w-full bg-[#F8F8F8] text-left">
          <div className="w-full p-[4rem] ">
            <div className="flex w-full">
              <div className="w-1/6 text-2xl font-normal text-[#343434]">
                Login
              </div>
              <div className="w-2/3 text-2xl font-normal text-[#343434]">
                Sign Up
              </div>
            </div>
            <form>
              <div className="mt-5">
                <label htmlFor="accountnumber">Account Number</label>
                <input
                  type="accountnumber"
                  placeholder="50501623495"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;

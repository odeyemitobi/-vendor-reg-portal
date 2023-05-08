import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router";
import ETAX from "../../Assets/pic/Etax.png";
import RECTANGLE from "../../Assets/pic/Rectangle.png";
import HANDSHAKE from "../../Assets/img/Handshake.png";
import MainLayout from "../../layout/MainLayout";
import Loginbutton from "../../component/Button/Loginbutton";

function Login() {
  const initialValues = {
    accountnumber: "",
    password: "",
  };
  const [inputValues, setInputValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputErrors(validate(inputValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      console.log(inputValues);
      navigate("/four");
    }
  }, [inputErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.accountnumber) {
      errors.accountnumber = "Account number is required!";
    } else if (values.accountnumber.length < 11) {
      errors.accountnumber = "Account number must be more than 11 characters";
    } else if (values.accountnumber.length > 11) {
      errors.accountnumber =
        "Account number cannot exceed more than 11 characters";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 8) {
      errors.password = "Password cannot exceed more than 8 characters";
    }
    return errors;
  };

  return (
    <MainLayout>
      <div className="flex w-full justify-between">
        <div className="w-full pt-[6rem] text-center font-sans">
          <div className="w-full ">
            <h3 className="text-3xl font-bold text-[#0E237E]">Welcome!</h3>
            <p className="font-sans text-base text-[#343434cc]">
              Quality Services are our delight
            </p>
          </div>
          <div className="mt-12 w-full">
            <img className="" src={HANDSHAKE} alt="" />
          </div>
          <div className="mt-20 mb-2 pl-[2rem] text-left text-[13px] leading-5 text-[#343434]">
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
      </div>
      <div className="w-full bg-[#F8F8F8] text-left font-sans">
        <div className="mt-[4.3rem] w-full p-[4rem] ">
          <div className="flex w-full pl-2">
            <div className="w-1/6 text-2xl font-semibold text-[#343434]">
              <div className="w-[48%] border-b-4 border-blue-900 pb-1">
                Login
              </div>
            </div>
            <div
              className="w-2/3 cursor-pointer text-2xl text-[#343434]"
              onClick={() => navigate("/")}
            >
              Sign Up
            </div>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="mt-[3.5rem] flex flex-col">
              <label
                className="mb-1 pl-2 text-sm tracking-wide text-[#343434]"
                htmlFor="accountnumber"
              >
                ACCOUNT NUMBER
              </label>
              <div className="w-full">
                <div className="absolute px-6 py-3 text-center text-[24px]">
                  <FiUser />
                </div>
                <input
                  name="accountnumber"
                  className="w-full rounded-sm p-3 pl-[4.5rem] font-sans text-[18px] italic"
                  value={inputValues.accountnumber}
                  onChange={handleChange}
                  type="accountnumber"
                  placeholder="50501623495"
                />
              </div>
              <p className=" mt-1 pl-2 text-xs text-red-600">
                {inputErrors.accountnumber}
              </p>
            </div>
            <div className="mt-9 flex flex-col">
              <label
                className="mb-1 pl-2 text-sm text-[#343434]"
                htmlFor="password"
              >
                PASSWORD:
              </label>
              <div className="w-full">
                <div className="absolute px-6 py-3 text-center text-[20px]">
                  <FiLock />
                </div>
                <input
                  name="password"
                  className="w-full rounded-sm p-3 pl-[4.5rem] text-[18px] italic"
                  value={inputValues.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="* * * * * * *"
                />
              </div>
              <p className=" mt-1 pl-2 text-xs text-red-600">
                {inputErrors.password}
              </p>
            </div>
            <div
              className="mt-3 w-full cursor-pointer text-right text-[#5166D4]"
              onClick={() => navigate("/forgotpassword")}
            >
              <p>forgot password?</p>
            </div>
            <div className="mt-9">
              <Loginbutton />
            </div>
          </form>
        </div>
        <div className="mt-[14rem]">
          <img className="ml-auto mr-6 h-11" src={ETAX} alt="" />
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import StaffLayout from "../../layout/StaffLayout";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import STAFFETAX from "../../Assets/pic/Staffetax.png";
import Loginbutton from "../../component/Button/Loginbutton";

function Staffportal() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [inputValues, setInputValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputErrors(validate(inputValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      console.log(inputValues);
    }
  }, [inputErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
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
                  name="email"
                  className="w-full rounded-sm p-3 pl-[4.5rem] font-sans text-[18px] italic"
                  value={inputValues.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="moosteebeasty@fidelitybank.ng"
                />
              </div>
              <p className="mt-1 text-left pl-2 text-xs text-red-600">
                {inputErrors.email}
              </p>
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
                  name="password"
                  className="w-full rounded-sm p-3 pl-[4.5rem] font-sans text-[18px] italic"
                  value={inputValues.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="* * * * * * *"
                />
              </div>
              <p className="mt-1 text-left pl-2 text-xs text-red-600">
                {inputErrors.password}
              </p>
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

import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";
import ETAX from "../../Assets/pic/Etax.png";
import MainLayout from "../../layout/MainLayout";
import UNLOCK from "../../Assets/img/unlock.png";
import Resetbtn from "../../component/Button/Resetbtn";

function Forgotpassword() {
  const initialValues = {
    accountnumber: "",
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
      navigate("/login");
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
    return errors;
  };

  return (
    <MainLayout>
      <div className="flex w-full justify-between font-sans">
        <div className="w-full">
          <div className="w-full pt-[8rem]">
            <img
              className="ml-auto mr-auto block h-[21rem]"
              src={UNLOCK}
              alt=""
            />
          </div>
          <div className="mt-[12rem] mb-2 pl-8 text-left font-sans text-[13px] leading-5 text-[#343434]">
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
        <div className="w-full text-center">
          <div className="w-[80%] bg-[#F8F8F8]">
            <div className="mt-[8rem] w-full">
              <h1 className="pt-8 text-[24px] font-semibold">
                Forgot Password?
              </h1>
              <form
                onSubmit={handleSubmit}
                className="w-full pl-[3rem] pb-[5rem]"
              >
                <div className="mt-[3.5rem] flex flex-col">
                  <label
                    className="mb-1 pl-2 text-left text-sm tracking-wide text-[#343434]"
                    htmlFor="accountnumber"
                  >
                    ACCOUNT NUMBER
                  </label>
                  <div className="w-[90%]">
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
                  <p className="mt-1 pl-2 text-left text-xs text-red-600">
                    {inputErrors.accountnumber}
                  </p>
                </div>
                <div className="mt-8 w-full text-left">
                  <Resetbtn />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-[11rem]">
            <img className="ml-auto mr-6 h-11" src={ETAX} alt="" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Forgotpassword;

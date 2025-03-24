import React from "react";
import { useNavigate } from "react-router-dom";

const AuthScreen = () => {
  const navigate = useNavigate();
  function handleNavigation(e) {
    e.stopPropagation();
    let id = e.target.id;

    if (id === "signup") {
      navigate("/auth/signup");
    } else if (id === "login") {
      navigate("/auth/login");
    } else {
      console.log("Wrong Key");
    }
  }

  return (
    <div className=" h-screen flex justify-end items-end p-4">
      <div className="flex jusitfy-center flex-col gap-y-3 ">
        <div>
          <h2 className="font-bold text-xl">Welcome to POPX</h2>
          <p className="text-[16px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quibusdam?
          </p>
        </div>
        <div
          className=" flex flex-col w-full p-1 gap-y-2 mb-10"
          onClick={handleNavigation}
        >
          <button
            id="signup"
            className=" py-2 w-full text-center bg-[#6C25FF] rounded-sm text-white text-[14px] font-semibold  cursor-pointer"
          >
            Create Account
          </button>
          <button
            id="login"
            className=" py-2 w-full text-center bg-[#CEBAFB] rounded-sm text-[#3B3C4A] text-[14px] font-semibold cursor-pointer "
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;

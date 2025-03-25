import { Children, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    phoneNumber: "673749",
    email: "johndoe@mail.com",
    pass: "****",
    comName: "Doe EnterPrises",
    isAgency: true,
  });
  let navigate = useNavigate();

  function handleForm(e) {
    e.stopPropagation();
    e.preventDefault();
    navigate("/home", {
      state: { fullName: formData.fullName, email: formData.email },
    });
  }

  function handleRadioBtn(e) {
    e.stopPropagation();
    if (e.target.id === "yes") {
      setFormData((prev) => ({ ...prev, isAgency: true }));
      //   e.target.nextElementSibling.children[0].children[0].style.background =
      //     "#3A47CC";
      //   e.target.nextElementSibling.style.background = "#3A47CC";
    } else if (e.target.id === "no") {
      setFormData((prev) => ({ ...prev, isAgency: false }));

      //   e.target.nextElementSibling.children[0].children[0].style.background =
      //     "#3A47CC";
      //   e.target.nextElementSibling.style.background = "#3A47CC";
    }
  }

  function handleChange(e) {
    const id = e.target.id;
    switch (id) {
      case "fullName":
        setFormData((prev) => ({ ...prev, fullName: e.target.value }));
        break;
      case "phone_number":
        setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }));
        break;
      case "email":
        setFormData((prev) => ({ ...prev, email: e.target.value }));
        break;
      case "pass":
        setFormData((prev) => ({ ...prev, pass: e.target.value }));
        break;
      case "com_name":
        setFormData((prev) => ({ ...prev, comName: e.target.value }));
        break;
      default:
        console.log("You Choose Wrong Field To edit");
    }
  }

  return (
    <div className=" h-screen w-full p-4">
      <div className="flex jusitfy-center flex-col gap-y-3 py-2 h-full">
        <div className=" w-3/6">
          <h2 className="font-bold text-2xl">Create your POPX account</h2>
        </div>
        <form
          className=" flex-1 flex flex-col w-full p-1 gap-y-3  "
          onSubmit={handleForm}
        >
          <div className=" w-full flex flex-col gap-y-6 py-2">
            <div className="relative w-full">
              <label
                htmlFor="fullname"
                className="absolute -top-2 left-2 text-[#9767FD] bg-[#F7F8F9] px-1 text-[12px] font-semibold after:content-['*'] after:text-red-500 after:ml-2 after:absolute after:right-0"
              >
                Fullname
              </label>
              <input
                value={formData.fullName}
                onChange={handleChange}
                id="fullName"
                type="text"
                placeholder="Enter Fullname"
                className="border-[2px] border-[#DDDEDE] rounded-sm pl-1 py-1 outline-none w-full placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="phone_number"
                className="absolute -top-2 left-2 text-[#9767FD] bg-[#F7F8F9] px-1 text-[12px] font-semibold after:content-['*'] after:text-red-500 after:ml-2 after:absolute after:right-0"
              >
                Phone Number
              </label>
              <input
                value={formData.phoneNumber}
                onChange={handleChange}
                id="phone_number"
                type="text"
                placeholder="Enter Phone Number"
                className="border-[2px] border-[#DDDEDE] rounded-sm pl-1 py-1 outline-none w-full placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="absolute -top-2 left-2 text-[#9767FD] bg-[#F7F8F9] px-1 text-[12px] font-semibold after:content-['*'] after:text-red-500 after:ml-2 after:absolute after:right-0"
              >
                Email Address
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter Email Address"
                className="border-[2px] border-[#DDDEDE] rounded-sm pl-1 py-1 outline-none w-full placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="pass"
                className="absolute -top-2 left-1 text-[#9767FD] bg-[#F7F8F9] px-1 text-[12px] font-semibold after:content-['*'] after:text-red-500 after:ml-2 after:absolute after:right-0"
              >
                Password
              </label>
              <input
                value={formData.pass}
                onChange={handleChange}
                id="pass"
                type="password"
                placeholder="Enter Password"
                className="border-[2px] border-[#DDDEDE] rounded-sm pl-1 py-1 outline-none w-full placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="com_name"
                className="absolute -top-2 left-2 text-[#9767FD] bg-[#F7F8F9] px-1 text-[12px] font-semibold"
              >
                Company Name
              </label>
              <input
                value={formData.comName}
                onChange={handleChange}
                id="com_name"
                type="text"
                placeholder="Enter Your Company Name"
                className="border-[2px] border-[#DDDEDE] rounded-sm pl-1 py-1 outline-none w-full placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <fieldset className="flex gap-x-2" onClick={handleRadioBtn}>
              <legend>Are you Agency?</legend>
              <label className=" inline-flex justify-center items-center gap-x-1">
                Yes
                <input
                  id="yes"
                  type="radio"
                  name="agency"
                  className="hidden peer"
                />
                <div
                  className={`flex justify-center items-center rounded-full ${
                    formData.isAgency ? "bg-blue-700" : "bg-gray-700"
                  }  bg-gray-700 h-4 w-4`}
                >
                  <div className="flex justify-center items-center rounded-full bg-[#F7F8F9] h-3.5 w-3.5">
                    <span
                      className={`block rounded-full ${
                        formData.isAgency ? "bg-blue-700" : "bg-transparent"
                      } h-2 w-2`}
                    ></span>
                  </div>
                </div>
              </label>
              <label className=" inline-flex justify-center items-center gap-x-1">
                No
                <input
                  id="no"
                  type="radio"
                  name="agency"
                  className="hidden peer"
                />
                <div
                  className={`flex justify-center items-center rounded-full ${
                    formData.isAgency ? "bg-gray-700" : "bg-blue-700"
                  }  bg-gray-700 h-4 w-4`}
                >
                  <div className="flex justify-center items-center rounded-full bg-[#F7F8F9] h-3.5 w-3.5">
                    <span
                      className={`block rounded-full ${
                        formData.isAgency ? "bg-transparent" : "bg-blue-700"
                      } h-2 w-2`}
                    ></span>
                  </div>
                </div>
              </label>
            </fieldset>
          </div>
          <div className=" flex-1 flex  items-end">
            <button
              id="signup"
              className=" py-2 w-full text-center bg-[#6C25FF] rounded-sm text-white text-[14px] font-semibold cursor-pointer "
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

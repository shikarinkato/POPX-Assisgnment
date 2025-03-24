import { useNavigate } from "react-router-dom";

const LogIn = () => {
  let navigate = useNavigate();
  function handleForm(e) {
    e.stopPropagation();
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className=" h-screen flex p-4">
      <div className="flex jusitfy-center flex-col gap-y-3 py-2">
        <div className=" w-4/5">
          <h2 className="font-bold text-2xl">Signin to your POPX account</h2>
          <p className="text-[15px] text-gray-600 font-[500] mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quibusdam?
          </p>
        </div>
        <form
          className=" flex flex-col w-full p-1 gap-y-3 mb-10"
          onSubmit={handleForm}
        >
          <div className=" w-full flex flex-col gap-y-2 py-2">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="absolute -top-2 left-2 text-[#9767FD] bg-[#F7F8F9] px-1 text-[12px] font-semibold"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                className="border-[2px] border-[#DDDEDE] rounded-sm pl-1 py-1 outline-none w-full placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="pass"
                className="absolute -top-2 left-1 text-[#9767FD] bg-[#F7F8F9] px-1 text-[12px] font-semibold"
              >
                Password
              </label>
              <input
                id="pass"
                type="password"
                placeholder="Enter Password"
                className="border-[2px] border-[#DDDEDE] rounded-sm pl-1 py-1 outline-none w-full placeholder:text-[12px] placeholder:font-semibold"
              />
            </div>
          </div>
          <button
            id="login"
            className=" py-2 w-full text-center bg-[#CBCBCB] rounded-sm text-white text-[14px] font-semibold cursor-pointer "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

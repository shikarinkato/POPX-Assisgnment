import { Route, Routes, useNavigate } from "react-router-dom";
import AuthScreen from "./Screens/AuthScreen";
import LogIn from "./Components/Login";
import { useEffect } from "react";
import SignUp from "./Components/SignUp";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth");
  }, []);
  return (
    <div className=" flex justify-center w-full h-full bg-white">
      <div className="flex justify-center w-full lg:w-2/8 h-full bg-[#F7F8F9]  text-black  border-[1px] border-[#E5E5E5]">
        <Routes>
          <Route path="/auth" Component={AuthScreen} />
          <Route path="/home" Component={HomeScreen} />
          <Route path="/auth/login" Component={LogIn} />
          <Route path="/auth/signup" Component={SignUp} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

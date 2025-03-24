import React from "react";
import Camera from "../assests/icons8-camera-96.png";
function HomeScreen() {
  return (
    <div className=" flex flex-col h-screen w-full">
      <div className="bg-white text-black w-full p-4">
        <h2>Account Settings</h2>
      </div>
      <div className="h-full flex flex-1 flex-col">
        <div className=" flex  flex-col gap-x-2 py-4 px-2 ">
          <div className=" flex items-start gap-x-4 pl-2">
            <div className="relative">
              <div className=" h-[60px] w-[60px] rounded-full overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="user-image"
                  className=" object-center object-cover"
                />
              </div>
              <input type="file" className=" hidden" id="dp" />
              <label
                htmlFor="dp"
                className="inline-block rounded-full bg-purple-700 p-[0.3rem] absolute bottom-0  right-0"
              >
                <img
                  src={Camera}
                  alt="camers_icon"
                  className=" h-[10px] w-[10px]"
                />
              </label>
            </div>
            <div className=" flex flex-col pl-2">
              <span className="text-[15px] font-semibold">John doe</span>
              <span className="text-[15px] font-semibold text-gray-700">johndoe@mail.com</span>
            </div>
          </div>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            cupiditate quod eligendi blanditiis culpa dolorum impedit recusandae
          </p>
        </div>
        <div className=" flex-1  border-dashed border-y-[1px] mb-6"> </div>
      </div>
    </div>
  );
}

export default HomeScreen;

import { useEffect, useRef, useState } from "react";
import screenshot1 from "./screenshots/screenshot1.png";
import screenshot2 from "./screenshots/screenshot2.png";
import screenshot3 from "./screenshots/screenshot3.png";
import screenshot4 from "./screenshots/screenshot4.png";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      if (current == images.length) {
        current = 0;
      } else {
        current++;
      }
      images[current].classList.remove("opacity-0");
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => clearInterval(interval);
  }, [ref]);
  return (
    <>
      <div className="flex w-full h-full justify-center gap-x-8 items-center">
        <div className="w-[380px] h-[581px] relative">
          <img
            className="w-[380px] h-[581px]"
            src="https://instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png"
            alt=""
          />
          <div
            className="absolute w-[210px] h-[490px] top-[25px] right-[46px]"
            ref={ref}
          >
            <img
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
              src={screenshot1}
              alt=""
            />
            <img
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
              src={screenshot2}
              alt=""
            />
            <img
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
              src={screenshot3}
              alt=""
            />
            <img
              className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
              src={screenshot4}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-white flex flex-col items-center p-10 gap-6 border">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
              className="w-[240px] h-[80px] cursor-pointer"
            />
            <form className="flex flex-col gap-2 ">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[258px] h-[36px] focus:outline-none bg-zinc-50 p-2 text-sm truncate"
                type="text"
                placeholder="Phone number, username or e-mail"
              />
              <label className="relative w-[258px] h-[36px]">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={visibility ? "text" : "password"}
                  placeholder="Password"
                  className="w-[258px] h-[36px] focus:outline-none bg-zinc-50 p-2 text-sm"
                />
                {password == "" ? null : (
                  <span
                    className="absolute top-2 right-1 text-sm cursor-pointer"
                    onClick={() => setVisibility((visibility) => !visibility)}
                  >
                    {visibility ? "Hide" : "Show"}
                  </span>
                )}
              </label>

              <button className="bg-blue-500 text-white py-1 rounded-lg">
                Log In
              </button>
            </form>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="flex items-center">
                <div className="border-t border-gray-300 flex-grow" />
                <span className="px-4 text-[13px] text-gray-500 font-bold">
                  OR
                </span>
                <div className="border-t border-gray-300 flex-grow" />
              </div>
            </div>
            <div>
              <span className="flex  text-blue-800 cursor-pointer text-sm">
                <AiFillFacebook className="mr-2 text-xl" /> Sign In with
                Facebook
              </span>
            </div>
            <div>
              <a className="text-none text-blue-700 cursor-pointer text-sm">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="bg-white flex items-center px-10 py-5 gap-1 border">
            Don't you have an account?{" "}
            <a href="#" className="text-blue-600">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

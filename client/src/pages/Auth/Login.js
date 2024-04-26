import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from "react-router-dom";

const Login = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "black",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      {init && (
        <div className="h-screen bg-[#212122] flex flex-col items-start justify-between">
          <div className="p-6">
            <Link className="hover:text-cyan-400 text-2xl" to="/">
              WebAuth
            </Link>
          </div>
          <div className="max-w-md w-full form-data p-6">
            <h1 className="uppercase text-neutral-400 font-bold mb-1">
              Welcome Back
            </h1>
            <h1 className="text-white text-2xl font-medium mb-4">Sign In</h1>
            <Link
              className="hover:cursor-pointer hover:underline"
              to={"/register"}
            >
              New User ?<span className="text-cyan-400 "> Register </span>
            </Link>
            <form className="flex flex-col gap-3 mt-6">
              <div className="relative input-container">
                <input type="email" className="data-input" placeholder=" " />
                <label className="data-label text-slate-400">Email</label>
              </div>
              <div className="relative input-container">
                <input type="password" className="data-input" placeholder=" " />
                <label className="data-label text-slate-400">Password</label>
              </div>
              <button className="bg-cyan-400 group flex items-center gap-2.5 rounded-full w-fit text-black font-medium text-lg px-4 py-1 transition-[shadow,filter]  hover:bg-cyan-500 mt-4 ">
                <span>Access account</span>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  shapeRendering="geometricPrecision"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 transition-transform duration-250 group-hover:translate-x-1"
                >
                  <path
                    d="m12 4 6 6-6 6M2 10h16"
                    stroke="currentColor"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

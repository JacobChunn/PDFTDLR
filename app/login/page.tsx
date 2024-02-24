"use client";
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import Link from 'next/link';
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function LogIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [rememberMe, setRememberMe] = useState(false);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
    {/* navbar */}
    <header className="fixed top-0 w-full [background:var(--color-white)] [color:var(--color-black)] p-4 border-b-2 flex justify-between items-center z-10">
          <div className="ml-8">
            <h1>PDFTLDR</h1>
          </div>
          <div className="[font-family:var(--secondary-font)] flex-grow flex justify-center">
            <ul className="flex gap-[40px]">
              <button className="[color:var(--color-black)]">
                <Link href="/landing">Home</Link>
              </button>
              <button className="[color:var(--color-black)]">
                <Link href="/upload">Text Bot</Link>
              </button>
              <button className="[color:var(--color-black)]">
                <Link href="/profile">Profile</Link></button>
            </ul>
          </div>
          <div className="ml-auto">
            <button className="[color:var(--color-black)] font-bold">
              <Link href="/signup" className="[color:var(--color-black)] [font-family:var(--secondary-font)] font-medium">Sign Up</Link>
            </button>
          </div>
        </header>
    
    <div className="h-screen [background:var(--color-background-grey)] flex items-center justify-center">
      <section className="[background:var(--color-white)] w-[1200px] h-[800px] flex mt-16">
        {/* Robot Thinking */}

        <div className="flex-1 flex items-center justify-center" style={{ backgroundImage: "url('RobotThinking.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        </div>

        {/* Log-in form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[500px]">
            <form className="space-y-4">
              <h1 className="text-4xl font-bold text-left">Log In</h1>

              {/* Email input */}
              <div>
                <label htmlFor="username" className="block font-medium">Username</label>
                <input
                  type="username"
                  id="username"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                  required
                />
              </div>

              {/* Password input */}
              <div className="relative">
                <label htmlFor="password" className="block font-medium">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="w-full border rounded-md px-3 py-2 mt-1 pr-10"
                  required
                />

                {/* Eye icon */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none mt-7"
                  onClick={togglePasswordVisibility}
                >
                  <Icon icon={passwordVisible ? eyeOff : eye} size={20} />
                </button>
              </div>

              {/* Remember me checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 h-5 w-5"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                />
                <label htmlFor="rememberMe">Remember me</label>

                {/* Forgot password link */}
                <a href="#" className="ml-auto [color:var(--color-blue)]">Forgot Password?</a>
              </div>

              {/* Log-in button */}
              <button type="submit" className="w-full [background:var(--color-blue)] [color:var(--color-white)] font-bold rounded-md px-3 py-2 mt-4 hover:bg-blue-600 transition duration-300">Log In</button>
            </form>

            {/* Placeholder buttons */}
            <div className="flex justify-between mt-8">
            <button className="w-[250px] [background:var(--color-white)] [color:var(--color-blue)] font-bold rounded-md px-3 py-2 hover:bg-blue-600 hover:text-white hover:border-transparent transition duration-300 border-blue-500 border-solid border mr-2">Placeholder</button>
            <button className="w-[250px] [background:var(--color-white)] [color:var(--color-blue)] font-bold rounded-md px-3 py-2 hover:bg-blue-600 hover:text-white hover:border-transparent transition duration-300 border-blue-500 border-solid border">Placeholder</button>
            </div>

            {/* Sign-Up link */}
            <div className="mt-4 text-center">
              <p className="[color:var(--color-grey)]">Don't have an account? <Link href="/signup" className="[color:var(--color-blue)] font-medium">Sign up</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer className="flex flex-col justify-evenly [background:var(--color-dark-grey)] h-[150px]">
        <div className="flex items-center justify-between">
          <div className="p-4 ml-8">
            <h3 className="[color:var(--color-light-grey)] ">PDFTDLR</h3>
          </div>
          <div>
            <ul className="flex gap-[12px] [color:var(--color-light-grey)]">
              <li>Eleven</li>
              <li>Twelve</li>
              <li>Thirteen</li>
              <li>Fourteen</li>
            </ul>
          </div>
          <div className="mr-12 flex gap-3 [color:var(--color-light-grey)]">
            <a href="#"><span className="d text-1xl"><FaYoutube /></span></a>
            <a href="#"><span className="d text-1xl"><FaFacebookF /></span></a>
            <a href="#"><span className="d text-1xl"><FaTwitter /></span></a>
            <a href="#"><span className="d text-1xl"><FaInstagram /></span></a>
            <a href="#"><span className="d text-1xl"><FaLinkedinIn /></span></a>
          </div>
        </div>
        <div className="my-8 flex items-center justify-center text-xs [color:var(--color-light-grey)]">
          <p>PDFTDLR @2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
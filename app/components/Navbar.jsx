"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Link from "next/link";

import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto w-full flex justify-between  items-center py-3 text-1.5xl ">
      <div className="font-bold text-emerald-700 text-3xl">
        Next<span className="text-red-500">cent</span>
      </div>
      <ul className="flex gap-5">
        <li className=" hover:text-emerald-700">
          <Link href="/">Home</Link>
        </li>
        <br/>
        <li className=" hover:text-emerald-700">
          <Link href="#">About</Link>
        </li>
        <br/>
        <li className=" hover:text-emerald-700">
          <Link href="#">Service</Link>
        </li>
        <br></br>
        <li className=" hover:text-emerald-700">
          <Link href="#">Contact</Link>
        </li>
        <br></br>
        <br></br>
        <li className=" hover:text-emerald-700">
          <Link href="#">Login</Link>
        </li>
        <br></br>
        <li>
          <Link href="#" className="bg-red-500 text-white py-0.5 px-2 rounded hover:bg-blue-700">
            Sign Up
          </Link>
        </li>
      </ul>
      {theme === "dark" ? (
        <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
      ) : (
        <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default Navbar;

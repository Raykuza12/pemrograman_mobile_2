"use client";

import React from "react";
import { useTheme } from "./ThemeContext"; // Import hook useTheme
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme(); // Ambil tema dan fungsi setTema dari context

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="navbar bg-base-100 z-10 fixed top-0 border-b-2 border-foreground">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CV Online</a>
      </div>
      <div className="flex-none">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="flex justify-end pr-2 pt-2">
              <label htmlFor="my-drawer-4" className="drawer-button btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <h2>Page</h2>
              <li>
                <Link href="../">Home</Link>
              </li>
              <li>
                <Link href="../Pages/contact">Contact</Link>
              </li>
              <h2>Themes</h2>
              <li>
                <a onClick={() => handleThemeChange("light")}>Light</a>
              </li>
              <li>
                <a onClick={() => handleThemeChange("dark")}>Dark</a>
              </li>
              <li>
                <a onClick={() => handleThemeChange("cyberpunk")}>Cyberpunk</a>
              </li>
              <li>
                <a onClick={() => handleThemeChange("aqua")}>Aqua</a>
              </li>
              <li>
                <a onClick={() => handleThemeChange("coffee")}>Coffee</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

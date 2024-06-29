import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <header className="flex justify-between items-center h-20 px-6 md:px-10  shadow-lg">

      <div className="font-logo font-bold text-3xl" id="logo" >
        ShoshanMedia
      </div>


      <div className="flex flex-1 justify-end items-center gap-6 md:gap-10">

        <nav className="flex gap-4 md:gap-8 text-sm md:text-base items-center">
          <Link to="/" onClick={() => setTab("/")}
          // className={`hover:underline ${tab === "/search" ? "text-yellow-400" : ""
          //   }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

          </Link>
          <Link
            to="/search"
            onClick={() => setTab("/search")}
          // className={`hover:underline ${tab === "/search" ? "text-yellow-400" : ""
          //   }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </Link>
          <Link
            to="/newPost"
            onClick={() => setTab("/newPost")}
          // className={`hover:underline ${tab === "/newPost" ? "text-yellow-400" : ""
          //   }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

          </Link>
          <Link
            to="/profile"
            onClick={() => setTab("/profile")}
          // className={`hover:underline ${tab === "/account" ? "text-yellow-400" : ""
          //   }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Header;

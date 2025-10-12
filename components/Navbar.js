"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="sticky w-full h-16 shadow-xl bg-white p-4 z-50">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/" className="text-sm hover:border-b">
          Website Name
        </Link>
        <ul className="hidden sm:flex">
          <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/play">Play</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/create">Create</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/admin">Admin</Link>
          </li>
        </ul>
        <div className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/profile">Profile</Link>
        </div>
        <button onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </button>
      </div>
      
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[45%] sm:hidden h-screen bg-gray-100 p-10 ease-in duration-500 z-50"
            : "fixed right-[-100%] top-0 p-10 h-screen ease-in duration-500 z-50"
        }
      >
        <div className="flex w-full items-center justify-end">
          <button
            onClick={handleNav}
            className="sm:hidden cursor-pointer pl-24"
          >
            <AiOutlineClose size={25} />
          </button>
        </div>
        <ul className="flex flex-col py-4">
          <li className="py-4 cursor-pointer">
              <Link href="/play" onClick={() => setMenuOpen(false)}>Play</Link>
          </li>
          <li className="py-4 cursor-pointer">
              <Link href="/create" onClick={() => setMenuOpen(false)}>Create</Link>
          </li>
          <li className="py-4 cursor-pointer">
              <Link href="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
          </li>
          <li className="py-4 cursor-pointer">
              <Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

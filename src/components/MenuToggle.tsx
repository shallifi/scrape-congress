import React, { useState } from "react";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex-none relative">
      <button onClick={toggleDropdown} className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <ul className="menu rounded-box menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>How to</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;

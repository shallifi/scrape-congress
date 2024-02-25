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
      <div>
        {isOpen && (
          <div className="absolute w-full z-10">
            <ul className="menu rounded-box menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  About
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">
                      Welcome to the future of information consumption with
                      Ecne!
                    </h3>
                    <p className="py-4">
                      In a world flooded with information, we revolutionize the
                      way, you navigate that swift moving river of information.
                      Our Mission: Help users navigate to the prime source of
                      information.
                    </p>
                  </div>
                </dialog>
              </li>

              <li>
                <a>How to</a>
              </li>
              {/* <li>
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Contacts
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg"></h3>
                    <p className="py-4">
                   
                    </p>
                  </div>
                </dialog>
              </li> */}
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuToggle;

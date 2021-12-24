import React from "react";
import ReactDOM from "react-dom";
import "../css/modal.css";
import { useSpring, animated } from "react-spring";

const Modal = ({ open, onClose }) => {
  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: open ? 1 : 0,
    transform: open ? `translateY(0%)` : `translateY(-100%)`,
  });
  return (
    <>
      {open
        ? ReactDOM.createPortal(
            <div className="overlay">
              <animated.div style={animation}>
                <div className="modal">
                  {/* <button onClick={onClose}>Close</button> */}
                  <div className="flex w-full justify-between p-4 border border-black text-2xl">
                    <span>This is my text</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={onClose}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div>
                    <form
                      className="w-full max-w-lg mt-5"
                      // ref={form}
                      // onSubmit={sendEmail}
                      autoComplete="off"
                    >
                      <div className="w-full px-3 mb-6 md:mb-0 ">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Jane Doe"
                          required
                          name="name"
                        />
                      </div>
                      <div className="w-full px-3 mb-6 md:mb-0 ">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Email
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="email"
                          placeholder="user@gmail.com"
                          required
                          name="email"
                        />
                      </div>
                      <div className="w-full px-3 mb-6 md:mb-0 ">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Phone no
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="number"
                          placeholder="Phone no..."
                          required
                          name="phone"
                        />
                      </div>
                      <div class="w-full px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-state"
                        >
                          Space Type
                        </label>
                        <div class="relative">
                          <select
                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            name="spaceType"
                          >
                            <option>Recidential/Home</option>
                            <option>Office</option>
                            <option>Store</option>
                            <option>Cafe/Restaurant</option>
                            <option>Other</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              class="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div class="lg:w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-3">
                        <button className="uppercase bg-red-600 text-white font-bold hover:text-red-600 hover:bg-white border-2 hover:border-red-600 w-full py-1 px-3 transition-all delay-75 rounded-xl text-center">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </animated.div>
            </div>,
            document.getElementById("portal")
          )
        : null}
    </>
  );
};

export default Modal;

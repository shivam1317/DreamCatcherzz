import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6zz59du",
        "template_2fz4ys9",
        form.current,
        "user_9cabxlWaMreMwWbuqzhvS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Your details have been submitted!", {
      position: "top-right",
    });
  };
  return (
    <div className="h-fit w-full" id="container">
      <div className="w-full flex justify-evenly flex-wrap">
        <img src="./images/contact_us.svg" alt="contact us" className="w-1/3" />
        <form
          className="w-full max-w-lg mt-10"
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
        >
          <div className="flex flex-wrap md:mx-0 lg:-mx-3 w-full justify-center mb-6 ">
            <div className="md:w-2/3 lg:w-1/2 px-3 mb-6 md:mb-0 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                className="appearance-none block lg:w-full md:w-3/4 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane Doe"
                required
                name="name"
              />
            </div>
            <div className="lg:w-1/2 md:w-20 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Phone No
              </label>
              <input
                className="appearance-none block lg:w-full md:w-2/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="Phone no..."
                required
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:mx-0 lg:-mx-3 mb-6 md:w-full justify-center  ">
            <div className="lg:w-full md:w-40 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block lg:w-full md:w-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="user@email.com"
                required
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:mx-0 lg:-mx-3 w-full justify-center mb-6">
            <div class="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
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

            <div class="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Project type
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="projectType"
                >
                  <option>New</option>
                  <option>Renovation</option>
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
            <div className="flex flex-wrap md:mx-0 lg:-mx-3 w-full justify-center md:mb-3 lg:mb-4 ">
              <div className="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0 mt-7">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Square feet area
                </label>
                <input
                  className="appearance-none block md:w-5/6 lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="area"
                  required
                  name="area"
                />
              </div>
              <div className="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0 mt-7">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Location
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Mumbai"
                  required
                  name="location"
                />
              </div>
            </div>
            <div className="flex flex-wrap md:mx-0 lg:-mx-3 w-full justify-center md:mb-3 lg:mb-4 ">
              <div className="lg:w-1/2 md:w-1/3 px-3 mb-4 md:mb-0 mt-7">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  When you want to start work
                </label>
                <input
                  className="appearance-none block md:w-5/6 lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="date"
                  placeholder="dd-mm-yy"
                  required
                  name="date"
                />
              </div>
              <div className="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0 mt-7">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Budget
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="number"
                  placeholder="Budget..."
                  required
                  name="budget"
                />
              </div>
            </div>
            <div className="md:w-1/3 lg:w-full px-3 mb-6 md:mb-0 mt-7">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Message
              </label>
              <textarea
                className="appearance-none h-28 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="date"
                placeholder="Hello..."
                name="message"
              />
            </div>
            <div className="w-full text-center my-5">
              <button className="uppercase bg-red-600 text-white font-bold hover:text-red-600 hover:bg-white border-2 hover:border-red-600 w-1/2 py-1 px-3 transition-all delay-75 rounded-xl">
                Submit
              </button>
            </div>
            <ToastContainer />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

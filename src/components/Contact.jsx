import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                First Name
              </label>
              <input
                className="appearance-none block lg:w-full md:w-3/4 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                required
                name="firstName"
              />
            </div>
            <div className="lg:w-1/2 md:w-20 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block lg:w-full md:w-2/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                required
                name="lastName"
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
            <div className="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                city
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Ahemadabad"
                name="state"
              />
            </div>
            <div className="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div className="relative">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Gujarat"
                  required
                  name="state"
                />
              </div>
            </div>
            <div className="flex flex-wrap md:mx-0 lg:-mx-3 w-full justify-center md:mb-3 lg:mb-6 ">
              <div className="lg:w-1/2 md:w-1/3 px-3 mb-6 md:mb-0 mt-7">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Date
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
                  Phone No
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="number"
                  placeholder="Phone no..."
                  required
                  name="phone"
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
    </div>
  );
}

export default Contact;

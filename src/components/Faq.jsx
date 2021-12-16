import React from "react";
import { useState } from "react";
import "../css/faq.css";
import "../css/navbar.css";
import data from "../js/faqData";

function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper h-screen w-screen" id="container">
      <div className="accordion shadow-2xl">
        {data.map((item, i) => {
          return (
            <div className="item">
              <div className="title krunal-ul" onClick={() => toggle(i)}>
                <h2 className="font-bold text-2xl my-5">{item.question}</h2>
                <span className="text-2xl">{selected == i ? "-" : "+"}</span>
              </div>
              <div
                className={
                  selected == i
                    ? "content show text-xl shadow-xl mb-10 md:transition-none lg:transition-all"
                    : "content text-xl"
                }
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;

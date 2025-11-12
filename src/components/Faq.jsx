import React, { useEffect, useState } from "react";
import Titlecomp from "./Titlecomp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Faq() {
  const [openIndex, SetOpenIndex] = useState(false);

  const toggleAccordion = (index) => {
    SetOpenIndex(openIndex === index ? false : index);
  };

  const [faqItem, setFaqItem] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://win25-jsf-assignment.azurewebsites.net/api/faqs"
    );

    const data = await res.json();
    setFaqItem(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="faq">
        <div className="container-space">
          <div className="left-side">
            <Titlecomp
              pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              h4Title="FAQs"
              h3Title="Frequently Ask Questions"
            />
          </div>

          <div className="right-side">
            <div className="accordion">
              {faqItem.map((item, index) => (
                <div key={index} className="card">
                  <div
                    className={` card-head ${
                      openIndex === index ? `active, card-bg` : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h6>{item.title}</h6>
                    <button className="arrow">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={openIndex === index ? "rotate" : ""}
                      />
                    </button>
                  </div>
                  <div
                    className={` card-hidden ${
                      openIndex === index ? `active` : ""
                    }`}
                  >
                    {openIndex === index && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

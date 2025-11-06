import React, { useState } from "react";
import Titlecomp from "./Titlecomp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Faq() {
  const [openIndex, SetOpenIndex] = useState(false);

  const toggleAccordion = (index) => {
    SetOpenIndex(openIndex === index ? false : index);
  };

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
              {/* card 1 with index 0 */}
              <div className="card">
                <div
                  className={` card-head ${
                    openIndex === 0 ? `active, card-bg` : ""
                  }`}
                  onClick={() => toggleAccordion(0)}
                >
                  <h6>Can I access my stored iterns anytime?</h6>
                  <button className="arrow">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={openIndex === 0 ? "rotate" : ""}
                    />
                  </button>
                </div>
                <div
                  className={` card-hidden ${openIndex === 0 ? `active` : ""}`}
                >
                  {openIndex === 0 && (
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia,there live the blind
                      texts.Separated they in liveBookmarksgrove right at the
                      coast
                    </p>
                  )}
                </div>
              </div>

              {/* card 2 with index 1 */}
              <div className="card">
                <div
                  className={` card-head ${
                    openIndex === 1 ? `active, card-bg` : ""
                  }`}
                  onClick={() => toggleAccordion(1)}
                >
                  <h6>Do you offer climate-controlled storage units?</h6>
                  <button className="arrow">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={openIndex === 1 ? "rotate" : ""}
                    />
                  </button>
                </div>
                <div
                  className={` card-hidden ${openIndex === 1 ? `active` : ""}`}
                >
                  {openIndex === 1 && (
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia,there live the blind
                      texts.Separated they in liveBookmarksgrove right at the
                      coast
                    </p>
                  )}
                </div>
              </div>

              {/* card 3 with index 2 */}
              <div className="card">
                <div
                  className={` card-head ${
                    openIndex === 2 ? `active, card-bg` : ""
                  }`}
                  onClick={() => toggleAccordion(2)}
                >
                  <h6>How long can I rent a storage unit?</h6>
                  <button className="arrow">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={openIndex === 2 ? "rotate" : ""}
                    />
                  </button>
                </div>
                <div
                  className={` card-hidden ${openIndex === 2 ? `active` : ""}`}
                >
                  {openIndex === 2 && (
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia,there live the blind
                      texts.Separated they in liveBookmarksgrove right at the
                      coast
                    </p>
                  )}
                </div>
              </div>

              {/* card 4 with index 3 */}

              <div className="card">
                <div
                  className={` card-head ${
                    openIndex === 3 ? `active, card-bg` : ""
                  }`}
                  onClick={() => toggleAccordion(3)}
                >
                  <h6>
                    Can I change the size of my storage unit if I need more
                    space?
                  </h6>
                  <button className="arrow">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={openIndex === 3 ? "rotate" : ""}
                    />
                  </button>
                </div>
                <div
                  className={` card-hidden ${openIndex === 3 ? `active` : ""}`}
                >
                  {openIndex === 3 && (
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia,there live the blind
                      texts.Separated they in liveBookmarksgrove right at the
                      coast
                    </p>
                  )}
                </div>
              </div>

              {/* card 5 with index 4 */}

              <div className="card">
                <div
                  className={` card-head ${
                    openIndex === 4 ? `active, card-bg` : ""
                  }`}
                  onClick={() => toggleAccordion(4)}
                >
                  <h6>How do I pay for my storage unit?</h6>
                  <button className="arrow">
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={openIndex === 4 ? "rotate" : ""}
                    />
                  </button>
                </div>
                <div
                  className={` card-hidden ${openIndex === 4 ? `active` : ""}`}
                >
                  {openIndex === 4 && (
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia,there live the blind
                      texts.Separated they in liveBookmarksgrove right at the
                      coast
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

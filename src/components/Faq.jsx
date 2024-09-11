import React, { useState } from 'react';
import SubHeading from './smallComponents/SubHeading';
import { faqData } from './smallComponents/FaqData';
import Email from './smallComponents/Email';

const Faq = () => {
  // State to track the currently opened question index
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the answer display by updating activeIndex
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already opened
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  return (
    <>
      <div className="relative top-20 mb-44 text-center">
        <div className="faq-title">
       <SubHeading heading={"Frequently Asked Questions"}/>
        </div>

        <div className="faqs-div relative top-5 text-white w-[90%] lg:w-[75%] left-1/2 transform -translate-x-1/2 lg:text-2xl">
          {faqData.map((faq, index) => (
            <div className="faq-accordion" key={index}>
              <div
                className="questions relative bg-[#2D2D2D] hover:bg-[#414141] mb-2 h-[65px] lg:h-[85px] text-left pl-6 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="relative top-5">{faq.question}</span>
                <i
                  className={`fa-thin ${
                    activeIndex === index ? "fa-x fa-solid fa-1x" : "fa-plus fa-2x lg:[fa-4x]"
                  } relative bottom-3 ml-[89%] text-white fa-1x lg:[fa-2x] lg:ml-[92%]`}
                ></i>
              </div>

              {/* Answer Section */}
              <div
                className={`answer relative overflow-hidden bg-[#2D2D2D] mb-2 text-left pl-6 transition-all duration-300 ${
                  activeIndex === index ? 'max-h-[1000px] p-4' : 'max-h-0'
                }`}
                style={{
                  transition: 'max-height 0.3s ease',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
     <Email/>
      </div>
    </>
  );
};

export default Faq;

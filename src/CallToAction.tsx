import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="bg-blue-800 text-blue-100 pb-8 pt-4 mt-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-2xl font-bold mb-2 mt-4 text-white ">
          Want to add Neural Search to your website?
        </div>
        <p>
          Neural Search is a great way to imporve your search experience
          resulting in a better consumer experience and higher conversion rates.
          Get started with Yext Answers to bring this super power to your
          business!
        </p>
        <div className="my-4 flex flex-col sm:flex-row">
          <div className="bg-white px-8 text-blue-900 text-lg font-bold py-2 rounded-full sm:mr-4 hover:bg-blue-100 cursor-pointer mb-2 text-center sm:mb-0 sm:text-left">
            Get a Demo
          </div>
          <div className="bg-white px-8 text-lg font-bold py-2 rounded-full bg-blue-700 text-white hover:bg-blue-900 cursor-pointer text-center sm:text-left">
            Try it Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const ChoiseShop = () => {
  return (
    <div>
      <h2 className=" uppercase text-3xl md:text-6xl text-red-800 font-bold text-center">
        Why choise us?
      </h2>

      <div className="grid md:grid-cols-3 gap-5 items-center justify-center ">
        <div
          data-aos="fade-right"
          className="mt-4 mb-11"
        >
          <div className="mb-11">
            <h2 className="text-xl font-bold uppercase">Quality products</h2>
            <hr />
            <p>
              Toys are one of the most stringently regulated products; as a toy
              manufacturer, wholesaler, or retailer, navigating these
              regulations can be difficult and time consuming.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase">Online payments</h2>
            <hr />
            <p>
              Trusted by millions of customer worldwide & Chosen by leading
              marketplaces. Track the status of your payments & Choose how to
              use your funds. Fully Approved & Licensed.
            </p>
          </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
          <img
            src="https://image.smythstoys.com/original/desktop/135323.jpg"
            alt=""
          />
        </div>

        <div
        data-aos="fade-left"
        >
          <div className="mb-11">
            <h2 className="text-xl font-bold uppercase">free delivery</h2>
            <hr />
            <p>
              Save money and grab the best free shipping iin world. Now get the
              fastest free home delivery to save money at Toy vehicles online
              shopping app✓No delivery ...
            </p>
          </div>
          <div className="pt-11">
            <h2 className="text-xl font-bold uppercase">Customers service</h2>
            <hr />
            <p>
              While both phone and email could be part of a customer service
              strategy, customers increasingly expect as many communication
              options provided by a company as they like to use themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiseShop;

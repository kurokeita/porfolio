import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container mx-auto flex sm:flex-nowrap pb-5 flex-wrap min-h-full h-96">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 flex flex-grow min-h-full rounded-lg overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 h-full"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=AZ+Sky+Tower&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-3 rounded shadow-md">
            <div className="lg:w-1/2 px-3">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                AZ SKY Tower, 51 Tran Dien St. <br />
                Hanoi 100000
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="mailto:kuro.keita94@gmail.com">
                kuro.keita94@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a className="leading-relaxed" href="tel:+84976463287">(+84) 97 646 3287</a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Send me an email or call me if you have any job that need my skill set
          </p>
        </form>
      </div>
    </section>
  );
}
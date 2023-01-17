import React from "react";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Timbó,+SC,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
          <div className="bg-gray-800 relative flex flex-wrap py-6 h-150 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Timbó, SC <br />
                Brazil
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs"> 
              </h2>
              <a
              href="https://www.linkedin.com/in/nicolasceruti"
              className="w-65 text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 hover:text-white rounded text-lg">
               Linkedin
            </a> 
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              </h2>
              <a
              href="https://www.github.com/nicolas-ceruti"
              className=" text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 hover:text-white rounded text-lg">
               Github
            </a>  
            </div>
          </div>
        
      </div>
    </section>
  );
}

import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto sm:flex-nowrap flex-wrap">
      <div className="text-center mb-10">
          <PhoneIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Contact us for more information!
          </p>
        </div>
        <div class="mb-32 text-gray-800 p-5">
          <div class="block rounded-lg shadow-lg bg-gray-800 p-5">
            <div class="flex flex-wrap items-center">
              <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div class="map-container-2 w-full">
                  <iframe src="https://www.google.com/maps/embed/v1/place?q=Timbó,+SC,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" class="left-0 top-0 h-full w-full rounded-x1 rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg " frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div class="flex flex-wrap pt-12 lg:pt-0">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-green-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg class="bg-white-100" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z" />
                          </svg>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="text-gray-500">Email</p>
                        <p class="text-gray-500">nicolasceruti15@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <a class="p-4 bg-green-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center" href='https://www.linkedin.com/in/nicolasceruti/' >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="green">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                      <div class="grow ml-6 ">
                        <p class="text-gray-500">Linkedin</p>
                        <p class="text-gray-500">https://www.linkedin.com/in/nicolasceruti/</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

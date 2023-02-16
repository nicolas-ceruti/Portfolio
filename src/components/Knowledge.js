import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";

export default function Skills() {
  return (
    <section id="knowledge">
      <div className="container px-5 py-10 mx-auto  border-b border-gray-700 border-b-[45px]">
        <div className="text-center ">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          "Learning never exhausts the mind”  ― Leonardo da Vinci
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5  sm:mx-auto sm:mb-2 -mx-2">

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 space-y-3 border-2 bg-gray-800 border-none dark:border-green-500 rounded-xl">
              <span class="inline-block text-green-500 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </span>
              <h1 class="text-2xl font-semibold text-white capitalize dark:text-white">Computer Sciences</h1>
              <p class="text-white-100 dark:text-gray-300">
                FURB - 2023/2028
              </p>
            </div>

            <div class="p-8 space-y-3 border-2 bg-gray-800 border-none dark:border-blue-300 rounded-xl">
              <span class="inline-block text-green-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </span>
              <h1 class="text-2xl font-semibold text-white capitalize dark:text-white">Engineering and Software Development Technician</h1>
              <p class="text-white-100 dark:text-white">
                CEDUP - 2021/2022
              </p>
            </div>

            <div class="p-8 space-y-3 border-2 bg-gray-800 border-none dark:border-blue-300 rounded-xl">
              <span class="inline-block text-green-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              <h1 class="text-2xl font-semibold text-white capitalize dark:text-white">Web Developing</h1>
              <p class="text-white-100 dark:text-gray-300 text">
                PUCRS - 2022
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

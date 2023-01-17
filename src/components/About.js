import React from "react";
import {AiFillGithub} from 'react-icons/ai'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center border-b border-gray-500 border-b-[45px]">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nicolas.
            <br className="hidden lg:inline-block" />Dev Full Stack Junior.
          </h1>
          <p className="mb-8 leading-relaxed">
            Software Developer | Software Engineering Technician <br/>
            Competent and committed to the smooth running of routines and tasks. My goal is to develop my skills to the maximum and put my knowledge into practice, adding value to the team.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Send Message
            </a>
            <a
              href="https://www.github.com/nicolas-ceruti"
              className="ml-4 inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 hover:text-white rounded text-lg">
              <AiFillGithub/> Github
            </a>  
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}

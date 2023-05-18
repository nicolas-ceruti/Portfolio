import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import resume from '../resume.pdf'

 
export default function Navbar() {

  const download = () => {
    const fileUrl = '../../../../resume.pdf'; // Substitua pela URL do seu arquivo PDF
    const fileName = 'Nicolas_Ceruti.pdf'; // Substitua pelo nome que deseja dar ao arquivo

    // Cria um link temporário
    const link = document.createElement('a');
    link.href = resume;
    link.download = fileName;

    // Clica no link para iniciar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Nicolas Ceruti
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#knowledge" className="mr-5 hover:text-white">
            Education
          </a>
          <a onClick={download} id="download-btn" className="mr-5 hover:text-white">
            Download Resume
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

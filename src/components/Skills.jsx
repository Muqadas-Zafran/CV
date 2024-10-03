import React from 'react';
import { ImHtmlFive2 } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io5';
import { TbBrandJavascript } from 'react-icons/tb';
import { RiReactjsFill } from 'react-icons/ri';
import { FaFigma, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { SiHasura } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

const Skills = () => {
  return (
    <div className="container skills md:w-[900px] mt-9" id="skills">
      <h1 className="text-4xl text-white text-center mb-8">SKILLS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center m-auto w-[100%] md:w-[800px]">
        
        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <ImHtmlFive2 className="text-8xl" />
          <h3 className="font-bold p-1 m-1">HTML</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <IoLogoCss3 className="text-8xl" />
          <h3 className="font-bold p-1 m-1">CSS</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <TbBrandJavascript className="text-8xl" />
          <h3 className="font-bold p-1 m-1">JAVASCRIPT</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <RiReactjsFill className="text-8xl" />
          <h3 className="font-bold p-1 m-1">REACT JS</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <FaFigma className="text-8xl" />
          <h3 className="font-bold p-1 m-1">FIGMA</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <FaBootstrap className="text-8xl" />
          <h3 className="font-bold p-1 m-1">BOOTSTRAP</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <SiTailwindcss className="text-8xl" />
          <h3 className="font-bold p-1 m-1">TAILWIND CSS</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <TbBrandRedux className="text-8xl" />
          <h3 className="font-bold p-1 m-1">REDUX</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <FaGithub className="text-8xl" />
          <h3 className="font-bold p-1 m-1">GITHUB</h3>
        </div>


        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <SiHasura className="text-8xl" />
          <h3 className="font-bold p-1 m-1">HASURA</h3>
        </div>

        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <FaAws className="text-8xl" />
          <h3 className="font-bold p-1 m-1">AWS</h3>
        </div>
        <div className="item flex flex-col justify-center items-center p-[20px] m-[10px] border-solid border-2 border-[#f6cd19] rounded shadow-xl shadow-[#534f24] bg-black"
          data-aos="flip-left"
          data-aos-duration="1000">
          <GrGraphQl  className="text-8xl" />
          <h3 className="font-bold p-1 m-1">GRAPHQL</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;

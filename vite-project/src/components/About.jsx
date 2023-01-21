import React, { useState } from "react";
import place1 from "../myassets/place1.jpg";
import place2 from "../myassets/place2.jpg";
import place3 from "../myassets/place3.jpg";
import place4 from "../myassets/place4.jpg";
const About = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      image: { place1 },
      place: "France",
    },
  ]);
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-300  via-rose-200 bg-blue-300">
      <div className=" flex flex-col justify-center items-center mt-4 p-8">
        <h1 className=" text-black text-6xl">About Us </h1>
       <p className="text-center text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptatibus illo molestiae minima blanditiis quidem illum soluta, dolor quae ducimus!</p>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row justify-center items-center text-black">
        <div className="shadow-lg shadow-slate-500 rounded-md m-4 hover:scale-125 duration-200 ">
          <img
            src={place1}
            className="w-40 h-40  rounded-md"
          />
          <div className="flex justify-between items-center text-md p-4">
            <div className="">
              <a href="https://www.disneylandparis.com/en-usd/">Disney Land</a>
            </div>
            <div className="">France</div>
          </div>
        </div>
        <div className="shadow-lg shadow-slate-500 rounded-md m-4 hover:scale-125 duration-200  ">
          <img
            src={place2}
            className="w-40 h-40  rounded-md"
          />
          <div className="flex justify-between items-center text-md p-4">
            <div className="">
              <a href="https://www.tajmahal.gov.in/">Taj Mahal</a>
            </div>
            <div className="">India</div>
          </div>
        </div>
        <div className="shadow-lg shadow-slate-500 rounded-md m-4 hover:scale-125 duration-200  ">
          <img
            src={place3}
            className="w-40 h-40 rounded-md"
          />
          <div className="flex justify-between items-center text-md p-4">
            <div className="">
              <a href="">Petra</a>
            </div>
            <div className="">Egypt</div>
          </div>
        </div>
        <div className="shadow-lg shadow-slate-500 rounded-md m-4 hover:scale-125 duration-200 ">
          <img
            src={place4}
            className="w-40 h-40  rounded-md"
          />
          <div className="flex justify-between items-center text-md p-4">
            <div className="">
              <a className="" href="">
                {" "}
                Great wall
              </a>
            </div>
            <div className="">China</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

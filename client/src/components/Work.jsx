import React from "react";

const Work = () => {
  // const github = "https://github.com/saipatnam99"; // GitHub profile URL

  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">work</p>
        <p className="text-gray-400">Checkout some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <p>
          <a
            href="https://github.com/saipatnam99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
           https://github.com/saipatnam99
          </a>
        </p>
      </div>
      <div className="py-4 text-center">
       
        <h2 className="text-gray-500 gap-4 text-4xl font-extrabold "> Projects </h2>
        <div className="grid font-semibold py-4">
        <a href=" https://website-027i.onrender.com"className="text-white hover:text-blue-500 hover:cursor-pointer">
          https://website-027i.onrender.com
        </a> 
        <a href=" https://techbridz.vercel.app/"className="text-white hover:text-blue-500 hover:cursor-pointer">       
          https://techbridz.vercel.app/
        </a>
        <a href=" https://ticket-m0jm.onrender.com/"className="text-white hover:text-blue-500 hover:cursor-pointer">       
        https://ticket-m0jm.onrender.com/
        </a>
        </div>
       
      </div>
    </div>
  );
};

export default Work;

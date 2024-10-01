import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div 
          className='w-28 h-28 bg-white rounded-full flex items-center justify-center p-2' 
          key={technology.name}
        >
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className="w-full h-full object-contain rounded-full" 
          />
        </div>
      ))}
    </div>
  );
};

export default Tech;

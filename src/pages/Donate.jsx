import React from "react";
import donate from "../assets/donate/donate.jpg";

const Contact = () => {
  return (
    <div className="p-10 font-roboto-condensed">
      <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-wider text-center mt-4 sm:mt-5 md:mt-7">
  Please donate to support needy children and families in Liberia.
</h1>

      <div className="flex justify-center items-center w-full">
        <img className="w-96" src={donate} alt="" />
      </div>
      <div className="flex justify-center gap-6 items-center flex-col  text-lg w-full h-96 ">
        <p className="mb-1  font-semibold tracking-wide text-center">
        If you would like to donate using our banking information, please email riehadliberia0219@gmail.com or call +1 786 906 3637.
        </p>
        <h3>
          <span className="font-bold ">Mobile Money: </span>+231 888-127-657 <br /> <span className="ml-12">Magdalene G. Gray </span>
        </h3>
        <h3>
          <span className="font-bold ">Cash App/Zelle: </span>+1-786-906-3637 <br /> <span className="ml-12">$Lydiakmallah </span>
        </h3>
      
        <h3>
          <span className="font-bold ">Motto: </span>
          Motto: Engage the Issue Today and Save Tomorrow. 
        </h3>
      </div>
      
    </div>
  );
};

export default Contact;
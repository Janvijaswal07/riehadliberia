import React from "react";
import contact from "../assets/contact/contact.png";

const Contact = () => {
  return (
    <div className="p-10 font-roboto-condensed">
        <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-wider text-center mt-4 sm:mt-5 md:mt-7">
        Contact us using the following information
</h1>
      <div className="flex justify-center items-center w-full">
        <img className="w-96" src={contact} alt="" />
      </div>
      <div className="flex justify-center gap-6 items-center flex-col  text-lg w-full h-96 ">
        <p className="mb-1  font-semibold tracking-wide text-center">
          Welcome Gate Community, Sanniquellie City, Nimba County, Liberia
        </p>
        <h3>
          <span className="font-bold ">Email: </span>riehadliberia0219@gmail.com
        </h3>
        <h3>
          <span className="font-bold ">Contact: </span>+231  88 6 94 9626
        </h3>
        <h3>
          <span className="font-bold ">Whatsapp: </span>+1 786 9063 637
        </h3>
        <h3>
          <span className="font-bold ">Address: </span>Sanniquellie, Liberia
        </h3>
        <h3>
          <span className="font-bold ">Facebook: </span>
          https://www.facebook.com/profile.php?id=100072004931494&mibextid=LQQJ4d
        </h3>
      </div>
      
    </div>
  );
};

export default Contact;
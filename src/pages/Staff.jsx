import React, { useState } from 'react';
import CEO from '../assets/Staff/CEO.png';
import manager from '../assets/Staff/program manager.png';
import supervisor from '../assets/Staff/supervisor.png';

const StaffCard = ({ name, title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-sm hover:border-green-500 rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 border-2 border-gray-200">
      {/* Keep image size the same, only adjust other visual aspects */}
      <img className="w-full h-96 object-cover object-top" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-1 text-green-700">{name}</div>
        <p className="text-gray-500 text-sm mb-2">{title}</p>
        <p className="text-gray-700 text-sm">
          {isExpanded ? description : `${description.substring(0, 150)}...`}
          <button
            onClick={handleReadMore}
            className="text-green-600 font-medium ml-1 hover:underline focus:outline-none"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        </p>
      </div>
    </div>
  );
};

const Staff = () => {
  const members = [
    {
      name: 'Lydia K. Mallah',
      title: 'Founder/CEO',
      description: `The idea of RIEHAD-Liberia is rooted in my childhood and adolescent experiences. I grew up during the second phase of a brutal 14 years of civil instability, during which hundreds of thousands of children were denied the right to education, and violence against adolescent girls became rampant.`,
      image: CEO,
    },
    {
      name: 'Garsaynee Wrour',
      title: 'Program Manager',
      description: `Mr. Garsaynee Wrour has a "C" certificate in education from the Zorzor Teacher Training Institute (ZRTTI). He has valuable experience working with various local and international NGOs on educational projects sponsored by USAID for the Ministry of Education.`,
      image: manager,
    },
    {
      name: 'Patience Williams',
      title: 'Field Supervisor',
      description: `Patience N Williams holds a bachelor's degree in education. She has experience teaching in early grades. She has worked with the Liberian United Youth for Community Safety and Development Inc. as Program Director. She also holds a certificate in Alternative Agronomic Corps championship training from Zimbabwe Harare. She has a passion for helping to improve the lives of vulnerable people.`,
      image: supervisor,
    },
  ];

  return (
    <div className="font-roboto-condensed bg-gray-50 py-10">
      <div className="text-center">
        <h1 className="text-3xl mt-7 md:text-5xl font-bold tracking-wide text-green-700">
          Our Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-10 p-4">
        {members.map((member, index) => (
          <StaffCard
            key={index}
            name={member.name}
            title={member.title}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Staff;

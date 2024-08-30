import React, { useState } from 'react';
import img1 from '../assets/sponsor/img1.jpg';
import img2 from '../assets/sponsor/img2.jpg';
import img3 from '../assets/sponsor/img3.jpg';
import img4 from '../assets/sponsor/img4.jpg';
import img5 from '../assets/sponsor/img5.jpg';
import img6 from '../assets/sponsor/img6.jpg';
import img7 from '../assets/sponsor/img7.jpg';
import img8 from '../assets/sponsor/img8.jpg';
import img9 from '../assets/sponsor/img9.png';

const StaffCard = ({ name, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-sm hover:border-green-500 rounded-lg overflow-hidden shadow-lg p-4 m-4 bg-white border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full h-72 rounded-lg border-2  overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2 text-green-700">{name}</div>
        <p className="text-gray-700 text-sm">
          {isExpanded ? description : `${description.substring(0, 150)}...`}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-green-500 mt-2 hover:underline focus:outline-none"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

const Sponsor = () => {
  const members = [
    {
      name: 'Gracious L. Tokpah',
      description: `Gracious is now five (5) years of age and lives with her parents, but they cannot afford to send her to school. She is a kindergarten student who dropped out of school a year ago. Mr. Nyan L. Tokpah, the father of Gracious, narrated that he's not educated. Therefore, he is unprivileged to secure a well-paid job that could enable him to receive full support. As a result, his children are not going to school. Gracious is one of the 6th children of her parents who have permanently dropped out of school due to a lack of financial support...`,
      image: img1,
    },
    {
      name: 'Papay T. Suah',
      description: `Eight-year-old Papay T. Suah is an orphan who needs assistance to attend school. He has never been to school. His parents passed away when he was three years old. He is being cared for by his paternal grandparents, who cannot afford his education. Both Papay T. Suah and his older sister, Oretha Suah, appeared malnourished due to a lack of proper care and nutrition. According to his grandmother...`,
      image: img2,
    },
    {
      name: 'Oretha Suah',
      description: `Oretha Suah is estimated to be thirteen years old. She is an orphan who lives with her grandparents, who cannot support her education financially. Both parents died about four years ago in one year due to illnesses that they could survive, but there was no money to spend on their health to save their lives. She explained that her father was an uneducated man who used to work very hard to support her and her little brother and their grandparents...`,
      image: img3,
    },
    {
      name: 'Jeo Tokpak',
      description: `Joe Tokpah is a grade two dropout student. His father abandoned the home and his children three years ago, and his single mother cannot afford to maintain him in school. Joe Tokpah is the youngest of his parents' four children. He and his three older siblings have been out of school for the past two academic years since their father abandoned them, and they are being cared for by their mother. They assist their mother in making farm to gather food for the home. Farm work is a hard labor job for kids. According to Joe's mother, when her husband first traveled to Singe County and was working with an oil palm plantation company, he used to send little finance that could purchase the children's uniforms and register them, but for two years now, he does not pick their phone calls nor send any financial supports. They are even worried about his safety. Joe Tokpah said, "I feel happy when I am in school, and I want to go back to school."`,
      image: img4,
    },
    {
      name: 'Roseline Williams',
      description: `Roseline Williams is the only child of her mother, Winnie Saye. Her father passed away when she was three years old. Her mother managed to put her in school for the first time, but she dropped out due to a lack of finances. Roseline and her mother, Winnie, are currently living with Winnie's parents. The birth of Roseline was a result of her mother's early marriage to an elderly man who died a few years after they got married. Winnie's family's low economic status is adversely affecting her daughter, Roseline Williams. Roseline's mother, Winner herself, is a secondary school student who has also dropped out of school. It will be much appreciated by Roseline's mother when she is sponsored to school..`,
      image: img5,
    },
    {
      name: 'Gbo Kebwilliams',
      description: `Gbo Kehwilliam has never been to school before. He is the youngest of his parents' 6 children. According to the father, his family survives on charcoal burning. They used the proceeds to pay school fees, make a farm, and cater to the family's essential needs, which was not sufficient to get all his kids in school at the same time. Meanwhile, while his older siblings attend school, Gbo stays at home to assist his mother with food preparation and other homework. From the look of things, Gbo Kehwilliam seems denied by his parents. As such, he is not always happy. He needs to be in school like his other siblings, and I think that helping him go to school will be an awesome and rewarding decision.`,
      image: img6,
    },
    {
      name: 'Mishael Guah',
      description: `Mishael Guah is eight (8) years old and lives with his grandfather. He is a grade-one dropout. He has been living with his grandfather since his father died four years ago. His mother is alive but has not shown any sense of responsibility towards him. His grandfather had been the only one caring for him, and now he is ill. His health condition prevents him from working and supporting Misheal's education. It was reported by community members that Misheal suffered from physical assault and child labor from other people in his household. Misheal faces the challenge of being over age for the grade level due to a lack of funds. Your support in helping Mishael would be greatly appreciated by his family.`,
      image: img7,
    },
    {
      name: 'Beatrice Luogon',
      description: `Beatrice Luogon's grandmother says, "She is a grade 3 dropout due to financial constraints. Both parents are physically strong enough but make no effort to send her and her other siblings to school. Her grandmother said her father roams around from one place to another, leaving his children without support and attention. She is unsure if his behavior towards his family is related to mental illness or normal. She is one of the eight children of her parents. That is why she decided to take her house to stay with her. Beatrice's grandmother burns charcoal to provide for Beatrice and herself. The little funds she raises are insufficient to feed them, cloth them, and simultaneously send Beatrice to school. Beatrice's physical appearance shows that she is malnourished. Affording Beatrice the opportunity to go to school will be a great intervention for her family."`,
      image: img8,
    },
    {
      name: 'Success L. Zainbay',
      description: `Success L. Zaingbay is four years old and a member of a family of five (5). He is a Kindergarten dropout. His father is a casual laborer whose only source of income is the burning of charcoal. Success and his two older siblings are not in school because their father cannot afford their fees. He lives with his paternal grandmother. I feel that helping Zaingbay to get back to school will be rewarding to his family because he seems very bright and speaks clearly. His physical look is good, and he declares that he is well taken care of by his grandmother, but she cannot afford to send him to school. He would like to be in school like his other friends. I believe giving him an opportunity will be appreciated by him and his family.`,
      image: img9,
    },
  ];

  return (
    <main className="p-10 font-roboto-condensed bg-gray-50">
       <div className="text-center  ">
            <h1 className="text-3xl   md:text-5xl font-bold tracking-wide text-[#006D28]">
              Sponsor a child
            </h1>
           
          </div>
      <div className="mt-8 flex flex-wrap justify-center">
        {members.map((member, index) => (
          <StaffCard
            key={index}
            name={member.name}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Sponsor;

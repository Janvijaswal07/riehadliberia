import React from "react";
import bg from "../assets/homeimg/whole-group-orig_orig.jpg";
import { NavLink } from "react-router-dom";
import education from "../assets/homeimg/education.jpg";
import scholar from "../assets/homeimg/scholarship.png";
import health from "../assets/homeimg/healthcare.png";
import agriculture from "../assets/homeimg/planting.png";
import homeagriculture from "../assets/homeimg/home-agri.jpg";
import homehealth from "../assets/homeimg/home-health.jpg";
import home1 from '../assets/homeimg/home1.jpg';
import home2 from '../assets/homeimg/home2.jpg';
import home3 from '../assets/homeimg/home-3.jpg';

export const Home = () => {
  return (
    <div className="font-roboto-condensed">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-[#0f2316] bg-opacity-70">
          <h1 className="text-white font-black text-4xl md:text-6xl lg:text-8xl tracking-wider mb-4">
            Next Generation
          </h1>
          <p className="text-white font-bold text-sm md:text-lg mb-8">
            Our future. Our Generation
          </p>
          <NavLink to="/donate">
            <button className="border-none px-8 md:px-12 py-2 md:py-3 text-sm md:text-lg rounded-full font-medium bg-green-400 hover:bg-green-500 shadow-lg text-white tracking-wider">
              Donate Now
            </button>
          </NavLink>
        </div>
      </section>

      {/* Mission Section */}
      <main className="p-4 md:p-8 lg:p-16">
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#006D28]">
            Our Mission
          </h1>
          <p className="text-[#006D28] font-medium mt-3 text-sm md:text-base tracking-wider">
            Liberia Rural Intervention for Education, Health, and Agriculture
            Development (RIEHAD-LIBERIA) INC.
          </p>
        </section>

        {/* Flex Container for Paragraph and Image */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Paragraph */}
          <div className="flex-1 md:pr-4 leading-7 mb-4 md:mb-0">
            <p>
              RIEHAD-Liberia's mission is to make positive changes in our
              communities by fighting societal ills of today in the areas of
              education, health, and agriculture and engaging in rural
              communities' economic empowerment programs in line with the
              Sustainable Development Goals 2, 3, 4, 5, 6, & 13. We aim to
              reduce disparities in key areas affecting our communities, such
              as inadequate education, a struggling healthcare system,
              persistent poverty, food insecurity, and harmful environmental
              practices impacting people's lives, especially children, girls,
              and women.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src={education}
              alt="Education"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Key Pillars */}
        <section className="mt-10 md:mt-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#006D28]">
            Motto:
          </h2>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mt-3">
            Engage the Issues Today and Save Tomorrow
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl text-[#006D28] font-bold text-center mt-3 tracking-wider">
            Our Key Pillars
          </h1>
          <div className="flex flex-wrap justify-center md:justify-evenly items-center mt-10 md:mt-14">
            <div className="flex flex-col items-center m-2">
              <img className="w-12 md:w-16 lg:w-20" src={scholar} alt="Education" />
              <p className="text-sm md:text-base lg:text-lg">Education</p>
            </div>
            <div className="flex flex-col items-center m-2">
              <img className="w-12 md:w-16 lg:w-20" src={health} alt="Health" />
              <p className="text-sm md:text-base lg:text-lg">Health</p>
            </div>
            <div className="flex flex-col items-center m-2">
              <img className="w-12 md:w-16 lg:w-20" src={agriculture} alt="Agriculture" />
              <p className="text-sm md:text-base lg:text-lg">Agriculture</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-20 md:mt-32">
        <h1 className="text-2xl md:text-3xl  lg:text-4xl font-semibold text-[#006D28] mb-4">
        Education
      </h1>
          <div className="flex flex-col md:flex-row  mb-7items-center gap-8">
            <div className="flex-1 leading-7">
              <p>
                Liberia grapples with some of the world's most alarming rates of
                out-of-school children, with approximately 15 to 20% of 6- to
                14-year-olds not enrolled in educational institutions. UNESCO
                reports that only 54.5% of young people in Liberia are literate,
                and 54% manage to complete primary education. This stark reality
                is exacerbated by socioeconomic disparities, as many of the
                children unable to access schooling come from impoverished
                backgrounds or live with disabilities. The dire situation
                regarding education and its inequalities has positioned Liberia
                unfavorably in global assessments, particularly in relation to
                the Sustainable Development Goals (SDGs). A recent review of
                progress placed Liberia at a concerning 153rd out of 163 nations
                striving to achieve the SDG 4. This ranking underscores the
                urgent need for intervention and improvement in educational
                accessibility and quality within the country. Moreover, the
                challenges faced by Liberian children extend beyond educational
                barriers, encompassing issues such as child labor, abuse, early
                marriages, female genital mutilation, and sexual violence. These
                multifaceted challenges compound the struggle for basic rights and
                opportunities for many young Liberians. In response to these
                pressing issues, RIEHAD-Liberia have taken action, particularly
                in rural areas, to address the root causes and effects of
                educational exclusion. Their efforts focus on facilitating the
                return of out-of-school children to school, enhancing the
                professional development of teachers, and raising awareness about
                crucial issues like bullying, stigmatization, and discrimination
                against individuals with disabilities. By fostering inclusive and
                safe environments, both within schools and communities, RIEHAD-Liberia
                takes initiatives like conducting anti-bullying, stigmatization,
                and discrimination campaigns strive to ensure that all children
                in Liberia have access to quality education and the opportunity
                to thrive.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <img className="w-full md:w-80 lg:w-96 rounded-xl h-auto object-cover" src={home1} alt="Home 1" />
                <img className="w-full md:w-80 lg:w-96 rounded-xl h-auto object-cover" src={home2} alt="Home 2" />
                <img className="w-full md:w-60 lg:w-72 rounded-xl h-auto object-cover" src={home3} alt="Home 3" />
              </div>
            </div>
          </div>
        </section>

        {/* Agriculture Section */}
        <section className=" md:mt-32">
  <div className="flex flex-col md:flex-row items-start gap-8">
  <div className="flex-1 mt-20 " >
      <img
        className="w-full md:w-[550px]  lg:w-[600px] h-auto object-cover md:h-96 object-top rounded-md"
        src={homeagriculture}
        alt="Home Agriculture"
      />
    </div>
    <div className="flex-1  ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#006D28] mb-6">
        Agriculture
      </h1>
      <p className="leading-7 mb-8">
        Liberia's agricultural landscape faces significant challenges
        that require urgent attention. Despite its fertile land and
        potential for agricultural development, the country struggles
        with issues related to food security, rural poverty, and
        underdeveloped agricultural practices. Limited access to modern
        farming techniques, inadequate infrastructure, and lack of
        investment in agriculture have hindered the sector's growth.
        Small-scale farmers, who form the backbone of Liberia's
        agriculture, often lack access to essential resources such as
        quality seeds, fertilizers, and irrigation systems, limiting
        their productivity. As a result, many communities remain
        vulnerable to food shortages and malnutrition. In response to
        these challenges, RIEHAD-Liberia's efforts are focused on
        empowering rural farmers through education, training, and access
        to resources. By promoting sustainable agricultural practices,
        enhancing food production, and facilitating access to markets,
        RIEHAD-Liberia strives to improve the livelihoods of
        smallholder farmers and contribute to the overall economic
        development of rural communities. Through these initiatives, the
        organization aims to reduce poverty, increase food security, and
        create a sustainable and resilient agricultural sector in Liberia.
      </p>
    </div>
   
  </div>
</section>


        {/* Health Section */}
        <section className="mt-20 md:mt-32">
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#006D28] mb-6  ">
        Health
      </h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 leading-7">
              <p>
                Liberia's healthcare system faces significant challenges,
                including a shortage of healthcare professionals, inadequate
                infrastructure, and limited access to essential medical
                services. Despite efforts to improve healthcare delivery, many
                communities, especially in rural areas, continue to experience
                difficulties in accessing quality healthcare. The country faces
                a high burden of infectious diseases, maternal and child
                mortality, and malnutrition. Additionally, the mental health of
                Liberians is a growing concern, with limited resources and
                awareness surrounding mental health issues. In response to these
                challenges, RIEHAD-Liberia is dedicated to improving healthcare
                access and quality through community health programs, awareness
                campaigns, and support for healthcare facilities. The
                organization's initiatives aim to promote preventive healthcare,
                raise awareness about health and hygiene, and advocate for the
                well-being of vulnerable populations. By partnering with local
                communities, healthcare professionals, and organizations,
                RIEHAD-Liberia strives to address the healthcare needs of Liberia
                and contribute to the overall improvement of the country's
                healthcare system.
              </p>
            </div>
            <div className="flex-1">
              <img className="w-full md:w-80 lg:w-96 rounded-xl h-auto object-cover" src={homehealth} alt="Home Health" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

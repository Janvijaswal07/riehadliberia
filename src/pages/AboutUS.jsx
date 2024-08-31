import React from "react";
import bg from "../assets/about/aboutusbgimg.jpg";
import img1 from "../assets/about/cimg1.png";
import img2 from "../assets/about/cimg3.png";
import img3 from "../assets/about/ccimg4.png";
import img4 from "../assets/about/cvimg.png";
import img5 from "../assets/about/cimg6.png";
import img6 from "../assets/about/cimg7.png";
import img7 from "../assets/about/cimg8.png";
import img8 from "../assets/about/cimg9.png";

const AboutUS = () => {
  return (
    <div className="min-h-screen font-roboto-condensed">
      {/* Background image section */}
      <section className="relative w-full mb-8 h-screen overflow-hidden">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-start p-4 md:p-8 lg:p-14">
          <h1 className="text-white font-black text-4xl md:text-5xl lg:text-7xl ml-4 md:ml-10 lg:ml-28 tracking-widest">
            About our <br /> organization
          </h1>
        </div>
      </section>

      {/* Main content area */}
      <main className="px-4 md:px-8 lg:px-14">
        {/* Brief Historical Background Section */}
        <section className="px-4 md:px-8 lg:px-14">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#006D28] mb-6">
            Brief Historical Background
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 leading-8 tracking-wider text-justify">
              <p>
                Liberia Rural Intervention for Education, Health, and
                Agriculture Development (RIEHAD-Liberia) Inc. is a
                non-for-profit organization established on November 20, 2018,
                and was accredited on February 19, 2019, by the government of
                Liberia. Lydia K Mallah is the founder of RIEHAD-Liberia. From
                2007 to 2009, during her tenure as the vice speaker for Nimba
                County Children’s Parliament, now known as the Children Forum,
                Lydia began contemplating the reconstruction of Liberia. Her
                vision was to transform Liberia into a safe and healthy nation.
                Her dedication to serving her community intensified in 2014 when
                she contributed to life-saving efforts during the devastating
                'EBOLA' outbreak that ravaged three neighboring countries in
                West Africa: Liberia, Sierra Leone, and Guinea. This work was
                undertaken through the Danish Refugee Council (DRC). In 2018, as
                a senior student at African Bible College University in Yekepa,
                Nimba County, Lydia gained diverse perspectives on identifying
                and interpreting social issues. Driven by her passion for
                humanitarian aid and informed by her experiences, Lydia
                established the Liberia Rural Interventions for Education,
                Health & Agriculture Development (RIEHAD-Liberia) as a
                Non-Governmental Organization (NGO).
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                className="w-full md:w-80 lg:w-96 rounded-xl h-auto object-cover"
                src={img1}
                alt="Education in Liberia"
              />
            </div>
          </div>
        </section>

        {/* Purpose of the Organization Section */}
        <section className="px-4 md:px-8 lg:px-16 mb-8">
          <div className="flex flex-col items-center">
            <img
              src={img2}
              alt="Purpose of the Organization"
              className="w-full md:w-2/3 lg:w-full h-auto mb-4"
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-6 font-semibold text-[#006D28]">
              Purpose of the Organization
            </h1>
            <p className="mt-6 px-4 md:px-9 leading-8 tracking-wider text-center">
              RIEHAD-Liberia aims to address the myriad challenges confronting
              our communities, focusing on four key pillars: education, health,
              agriculture, and economic empowerment in rural communities. The
              organization aims to achieve the following:
            </p>
            <ul className="list-disc list-inside leading-8 tracking-wider space-y-2 mt-4 px-4 md:px-9 text-left">
              <li>Foster safe and clean community environments.</li>
              <li>
                Cultivate academic excellence, discipline, and moral integrity
                among Liberian students, while equipping teachers with effective
                pedagogical techniques.
              </li>
              <li>
                Empower community members to achieve economic self-reliance.
              </li>
              <li>
                Enhance community living standards through rural empowerment
                initiatives.
              </li>
              <li>
                Preserve animal and plant species, as well as the environment.
              </li>
            </ul>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 md:p-8 lg:px-14">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <img
                className="w-full lg:mb-10 md:mb-10 h-auto object-cover rounded-md"
                src={img3}
                alt="Mission"
              />
            </div>
            <div className="flex-1 lg:mt-16">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[#006D28] mb-6">
                Mission
              </h1>
              <p className="leading-8 tracking-wider mb-8">
                RIEHAD-Liberia's mission is to make positive changes in our
                communities by fighting societal ills of today in the areas of
                education, health, and agriculture and engaging the rural
                community dwellers in rural communities with economic
                empowerment programs through volunteerism, oneness, patriotism,
                hard work, humanity, integrity, equality, and accountability to
                save the now and the future. We aim to reduce disparities in key
                areas affecting our communities, such as inadequate education, a
                struggling healthcare system, persistent poverty, food
                insecurity, and harmful environmental practices impacting
                people's lives, especially children, girls, and women.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="px-4 md:px-8   lg:px-14">
          <div className="flex flex-col md:flex-row borderitems-start gap-16">
            <div className="flex-1  lg:mt-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[#006D28] mb-6">
                Vision
              </h1>
              <ul className="list-disc pl-4 md:pl-8 space-y-2 leading-8 tracking-wider text-left">
                <li>
                  Adopt global educational standards to ensure our students are
                  globally competitive.
                </li>
                <li>
                  Emphasize the importance of forests and farmlands for food
                  security and environmental conservation.
                </li>
                <li>
                  Enhance community living standards through rural empowerment
                  initiatives.
                </li>
                <li>
                  Preserve animal and plant species, as well as the environment.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                className="w-full lg:h-72 mb-14 md:mb-10 h-auto object-cover rounded-md"
                src={img4}
                alt="Vision"
              />
            </div>
          </div>
        </section>

        {/* Code of Conduct Section */}
        <section className="px-4 md:p-8 lg:px-14  ">
          <h1 className="text-3xl text-center mb-6  md:text-4xl lg:text-4xl font-bold tracking-wide text-[#006D28] ">
            Code of Conduct
          </h1>
          <p className="mt-5 px-4 text-center leading-8 tracking-wider mb-3 md:px-8">
            RIEHAD-Liberia welcomes all institutional builders, irrespective of
            race, color, tribe, social, or religious background. The
            organization promotes unity and collaboration to address societal
            challenges. We adhere to the principles of anti-bribery, zero
            tolerance for sexual exploitation and abuse, responsible fund
            utilization, human rights, a peaceful work environment,
            professionalism, staff empowerment, punctuality, gender equity,
            advocacy, unity, and accountability.
          </p>
        </section>

        {/* Images Section */}
        <section className="p-4 md:p-8 lg:px-14">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4">
            <img
              src={img5}
              alt=" "
              className="w-full md:w-1/2 lg:mb-24 lg:w-full object-contain h-auto rounded-lg"
            />
            <img
              src={img6}
              alt=""
              className="w-full md:w-1/2 lg:w-full object-contain h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Ethical Principles Section */}
        <section className="p-4 md:p-8  lg:px-14">
          <h1 className="text-3xl  md:text-4xl  lg:text-4xl font-bold tracking-wide text-[#006D28] mb-10 text-center">
            Ethical Principles
          </h1>
          <div className="flex flex-col  md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-xl text-center mb-4">
                In our operational framework, we uphold the following
                principles:
              </p>
              <ul className="list-disc leading-8 tracking-wider lg:pl-24 pl-4 space-y-2">
                <li>Volunteerism</li>
                <li>Unity</li>
                <li>Patriotism</li>
                <li>Humanity</li>
                <li>Equality</li>
                <li>Integrity</li>
                <li>Positive outcomes</li>
                <li>Hard work</li>

                <li>Inclusion</li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={img7}
                alt="Ethical Principles"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <img
              src={img8}
              alt="Ethical Principles"
              className="w-full md:w-full lg:w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUS;

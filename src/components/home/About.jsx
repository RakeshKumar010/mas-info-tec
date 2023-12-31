import React from "react";
import aboutBanner from "../../assets/about.jpg";
const About = () => {
  return (
    <div className="flex justify-around items-center lg:flex-row flex-col mb-10 lg:mb-0">
      <img src={aboutBanner} alt=".." className="lg:w-1/2 w-full " data-aos="fade-right"/>
      <div className="flex flex-col items-center gap-6 lg:items-start lg:w-1/3 w-full" data-aos="fade-left">
        <h1 className="lg:text-5xl text-2xl font-bold text-indigo-600 text-center ">About Us</h1>
        <p className="text-center lg:text-start">
          The scale of solutions and services, offered by us, are some of the
          landmarks into the IT industry.You can easily search our services like
          Website development company in patna, website company in Patna,
          Software development company in Patna, Software company in
          Patna,Website Designing company in Patna.Our foremost desire is
          customer satisfaction. .We know that time is the essence of business
          and we have ability to complete each project punctually. We try our
          best to do justice to your trust in us, so believe in us as we believe
          in you. vision We share a common vision to be the best company in
          Bihar and our mission is to provide our customers the best service. We
          love to take on new challenges and pride on seeing them through. Our
          Every emplioyee is dedicated to provide customers international
          quality service within the scheduled time and in an affordable cost.
        </p>
        <button className="bg-black py-3 px-8 text-white rounded-md">More About Us</button>
      </div>
    </div>
  );
};

export default About;

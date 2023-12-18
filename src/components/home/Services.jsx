import React, { useState } from "react";
import ServicesCard from "../cards/ServicesCard";

const Services = () => {
  const ServiceData = [
    {
        "sname": "Software & Website Development",
        "desc": "Design and development of software and websites tailored to your needs.",
        "img": "https://png.pngtree.com/png-vector/20200313/ourmid/pngtree-modern-flat-design-concept-of-app-development-with-characters-on-screen-png-image_2157895.jpg"
    },
    {
        "sname": "Digital Marketing & Bulk SMS",
        "desc": "Promote your business through digital channels and bulk SMS services.",
        "img": "https://crunchymedia.in/assets/uploads/media-uploader/bulk-sms-banner1653841775.png"
    },
    {
        "sname": "Network & IT Service Provider",
        "desc": "Providing network and IT solutions for businesses of all sizes.",
        "img": "https://img.freepik.com/free-vector/abstract-creative-website-hosting-illustration_23-2149223769.jpg"
    },
    {
        "sname": "Project work & Maintenance",
        "desc": "Handling project work and maintenance for various IT systems.",
        "img": "https://img.freepik.com/free-vector/flat-design-innovation-concept_23-2149163765.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698105600&semt=ais"
    },
    {
        "sname": "E-learning, Assignment & Training Programme",
        "desc": "Offering online learning resources, assignment help, and training programs.",
        "img": "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais"
    },
    {
        "sname": "Online Examination Practice Center",
        "desc": "Platform for practicing for various examinations online.",
        "img": "https://img.freepik.com/premium-vector/online-test-checking-answers-examination-test-quiz-student-test-employee-questionnaire-flat-vector-illustration-banner_128772-1833.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1701907200&semt=ais"
    },
    {
        "sname": "Data Analysis Management",
        "desc": "Managing and analyzing data to provide valuable business insights.",
        "img": "https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=ais"
    },
    {
        "sname": "Consultancy Services",
        "desc": "Providing expert advice in a particular area such as business, education, or technology.",
        "img": "https://img.freepik.com/free-vector/consulting-concept-illustration_114360-2579.jpg"
    },
    {
        "sname": "Data Entry & Form Filling",
        "desc": "Efficient data entry and form filling services for various industries.",
        "img": "https://static.vecteezy.com/system/resources/previews/005/647/944/original/isometric-illustration-concept-fill-in-the-registration-form-with-a-laptop-free-vector.jpg"
    },
    {
        "sname": "Voice/Non-Voice (BPO)",
        "desc": "Offering both voice and non-voice BPO services to handle various business processes.",
        "img": "https://www.shutterstock.com/image-vector/customer-service-hotline-operators-consult-600nw-1926286916.jpg"
    }
]
  
  return (
    <div className="flex flex-col items-center my-16 gap-16 ">
      <div className="flex justify-around  flex-wrap gap-14 lg:gap-0 lg:gap-y-16 w-full ">
        {ServiceData && ServiceData.map(({sname,desc,img})=>{
          return(<>
          
          <ServicesCard sname={sname} desc={desc} img={img}/>
          </>)
        })}
      
      </div>

      
    </div>
  );
};

export default Services;

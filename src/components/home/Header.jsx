import React from "react";
import Banner from "../../assets/banner.jpg";
const Header = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row-reverse justify-between bg-blue-950">
      <img
        src={Banner}
        alt=".."
        className="w-1/3 hidden lg:block"
        style={{ borderRadius: "50% 0 0 50%" }}
        data-aos="fade-left"
      />
      <div className="m-4 flex flex-col gap-5 mt-4 ">
        <div className="text-white flex flex-col gap-3 lg:text-left text-center">
          <h1 className="text-5xl font-bold text-red-600">Mas Info Tec</h1>
          <h3 className="text-2xl">
            Website, Software, IT & Network Services.
          </h3>
          <p>
            We are Specializes in Website Designing, Website Development,
            Software Development,Billing Software, Accounting
            Software,E-commerce Website, ERP Solutions, Digital Marketing, Bulk
            SMS , Network Design & Development,and AMC for Router, switches,
            Computer & Server
          </p>
        </div>
        <button className="bg-yellow-500 p-3 rounded-md shadow-md hover:shadow-black mx-auto">Contact Now</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import ClientCard from "../cards/ClientCard";

const Clients = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-10">
      <h1 className="text-5xl font-bold mx-auto text-yellow-500">Our Happy Clients!</h1>
      <hr className="w-28 bg-black h-1"/>
      <div className="flex justify-center gap-20 mb-20">
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>
    </div>
  );
};

export default Clients;

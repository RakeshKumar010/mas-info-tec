import React from "react";

const ClientCard = () => {
  return (
    <div>
      <div className="flex gap-4 flex-col  shadow-lg w-96 p-10 shadow-orange-400 rounded-xl rounded-bl-3xl"  data-aos="flip-right">
        <p className="">
          "Panfila® Global Solutions renders excellent services for all your
          technical needs. The expertise of Mahimai is incomparable that could
          cater to solve all our technical expectations. Our institute is very
          happy and fortunate to get such a gem to facilitate the fast growth of
          our Virtual Institute. Foreseeing a much longer learning travel with
          him…!"
        </p>
        <div className="flex gap-4">
          <img
            src="https://panfila.in/wp-content/uploads/2023/08/CAPUCHIN_WP_LOGO-4.png"
            alt=".."
            className="w-10"
           
          />
          <div>
            <p>Thalir Centre</p>
            <p>Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;

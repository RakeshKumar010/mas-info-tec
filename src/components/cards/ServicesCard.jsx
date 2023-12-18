
const ServicesCard = ({sname,desc,img}) => {
  
  return (
    <div className="flex justify-between p-4  items-center gap-3 flex-col w-64 text-center shadow-lg rounded-md shadow-indigo-400" data-aos="fade-up">
        <img src={img} alt=".." className="w-2/3" />
      <h1 className="text-2xl">{sname}</h1>
      <p>
       {desc}
      </p>
      <button className="bg-gray-950 text-white p-3 rounded-md">Read More</button>
    </div>
  );
};

export default ServicesCard;

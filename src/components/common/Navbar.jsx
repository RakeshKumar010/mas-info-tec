import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.jpg";
import { IoReorderFourOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="flex justify-between lg:px-10 px-3 items-center bg-gray-50 h-24 ">
      <Link to={'/'}> 
      
      <img src={Logo} alt=".." className="lg:w-20 w-1/4 " />
      </Link>

      <div className="lg:flex justify-between gap-12 hidden ">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to={"/about"}>
          <p>About</p>
        </Link>
        <Link to={"/services"}>
          <p>Services</p>
        </Link>
        <Link to={"/soft-sol"}>
          <p>Software Solutions</p>
        </Link>
        <Link to={'/net-sol'}>
          <p>Network Solutions</p>
        </Link>
        <Link to={'/contact'}>
        
        <p>Contact</p>
        </Link>
      </div>
      <IoReorderFourOutline size={"3em"} className="block lg:hidden" />
    </div>
  );
};

export default Navbar;

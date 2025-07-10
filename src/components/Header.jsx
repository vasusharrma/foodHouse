import { IoCart, IoCall } from "react-icons/io5";
import { IoMdPerson, IoMdHome } from "react-icons/io";

const Header = () => {
  return (
    <div className="p-4 mx-auto flex gap-5  md:gap-0 justify-around md:justify-between w-[100%] md:w-[80%] xl:w-[70%] items-center">
      <div
        id="logo"
        className="  md:block  font-extrabold text-3xl text-[#ED3500] "
      >
        <p>Vs.</p>
      </div>
      <div>
        <ul className="flex gap-5 items-center justify-center text-xl">
          <li className="flex   flex-col md:flex-row  justify-center gap-1 md:gap-2 items-center cursor-pointer">
            {" "}
            <IoMdHome />
            <p>Home</p>
          </li>
          <li className="flex  flex-col md:flex-row md:gap-2 gap-1  justify-center items-center cursor-pointer ">
            {" "}
            <IoMdPerson />
            <p>About</p>
          </li>
          <li className="flex  flex-col md:flex-row md:gap-2 gap-1 items-center justify-center cursor-pointer">
            <IoCall />
            <p>Contact</p>
          </li>
          <li className="flex flex-col md:flex-row md:gap-2 gap-1 items-center justify-center cursor-pointer">
            <IoCart />
            <p>Cart</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

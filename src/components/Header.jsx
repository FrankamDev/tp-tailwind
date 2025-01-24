import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="">
      <div className="bg-green-400 py-6"></div>
      <div className=" flex justify-between items-center my-2 px-10 ">
        <div className="bg-red-500 mt-2">
          <img src="../../public/devinsto.jpg" className="h-[22px]" alt="" />
        </div>

        <NavBar/>
      </div>
      <div className="border-t-2 border-gray-400 w-full my-4"></div>
    </div>
  );
};

export default Header;

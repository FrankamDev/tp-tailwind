const Header = () => {
  return (
    <div className="">
      <div className="bg-green-400 py-4"></div>
      <div className=" flex justify-between items-center my-2 px-10 ">
        <div className="bg-red-500 mt-2">
          <img src="../../public/devinsto.jpg" className="h-[22px]" alt="" />
        </div>

        <ul className="flex mt-2">
          <li className="mx-2 text-gray-600 font-bold ">Formations</li>
          <li className="mx-2 font-bold text-gray-600">Blog</li>
          <li className="mx-2 font-bold text-gray-600">Forum</li>
          <li className="mx-2 font-bold text-gray-600">S'inscrire</li>
          <li className="mx-2 font-bold text-gray-600">Se connecter</li>
        </ul>
      </div>
      <div className="border-t-2 border-gray-400 w-full my-4"></div>
    </div>
  );
};

export default Header;

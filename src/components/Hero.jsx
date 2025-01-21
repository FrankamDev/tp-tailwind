const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-20 min-h-100  ">
      <div className=" flex flex-col  md:text-left justify-start   p-6">
        <h1 className="text-4xl md:text-left font-bold mb-4 text-center text-green-400">
          Devinsto
        </h1>
        <h2 className="text-2xl md:text-left text-center mb-4">
          Apprenez, Créez, <br />
          Collaborez sans limites.
        </h2>
        <p className="text-center md:text-left mb-6 max-w-xl">
          La plateforme ultime pour apprendre, collaborer et construire des
          projets en développement web, graphisme, et bien plus encore.
        </p>
        <div className="flex w-full space-x-4">
          <button className="rounded-sm text-[14px] py-[4px] bg-green-400 w-full text-white hover:bg-green-500 transition">
            Créer votre compte
          </button>
          <button className="w-full text-[15px] px-[2px] text-gray-700 border-2 border-gray-300 rounded-sm hover:bg-gray-100 transition">
            Parcourir les cours
          </button>
        </div>
      </div>

      <div className="md:flex hidden justify-center items-center">
        <img
          src="../../public/Screenshot 2025-01-20 120813.png"
          className="w-1/2"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Hero;

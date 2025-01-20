const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-20 min-h-100  ">
      <div className=" flex flex-col  text-left justify-start   p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-green-400">Devinsto</h1>
        <h2 className="text-2xl mb-4">
          Apprenez, Créez, <br />
          Collaborez sans limites.
        </h2>
        <p className=" mb-6 max-w-xl">
          La plateforme ultime pour apprendre, collaborer et construire des
          projets en développement web, graphisme, et bien plus encore.
        </p>
        <div className="flex space-x-4">
          <button className="rounded-lg bg-green-400 p-[5px] text-white text-lg hover:bg-green-500 transition">
            Créer votre compte
          </button>
          <button className="p-[5px]  text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition">
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

const FormationCard = () => {
  return (
    <div className="bg-white shadow-lg  gap-2 rounded-lg overflow-hidden md:flex flex items-center flex-col md:flex-wrap justify-center p-10">
      <div className="card-container md:w-1/2 mb-5">
        <img src="../../public/vue-js.jpeg" alt="" />
        <h3 className="font-bold">Les base sur Vue.js</h3>
        <p>
          Vue.js est un framework JavaScript progressif utilisé pour construire
          des interfaces utilisateur et des applications web.
        </p>
      </div>
      <div className="card-container shadow-lg md:w-1/2 mb-5">
        <img src="../../public/vue-js.jpeg" alt="" />
        <h3 className="font-bold">Les base sur Vue.js</h3>
        <p>
          Vue.js est un framework JavaScript progressif utilisé pour construire
          des interfaces utilisateur et des applications web.
        </p>
      </div>
      <div className=" md:w-1/2 mb-5 card-container shadow-lg ">
        <img src="../../public/vue-js.jpeg" alt="" />
        <h3 className="font-bold">Les base sur Vue.js</h3>
        <p>
          Vue.js est un framework JavaScript progressif utilisé pour construire
          des interfaces utilisateur et des applications web.
        </p>
      </div>
      <div className="card-container md:w-1/2 mb-5 shadow-lg ">
        <img src="../../public/vue-js.jpeg" alt="" />
        <h3 className="font-bold">Les base sur Vue.js</h3>
        <p className="text-gray-600 font-semibold text-[12px]">
          Vue.js est un framework JavaScript progressif utilisé pour construire
          des interfaces utilisateur et des applications web.
        </p>
        ``
      </div>
    </div>
  );
};

export default FormationCard;

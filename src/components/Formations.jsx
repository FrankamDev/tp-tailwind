
import { NavLink } from 'react-router-dom';

const Formations = () => {
  return (
    <div className="px-24 gap-4">
      <h2 className="text-2xl font-bold">
        Tout ce dont vous avez besoin, <br />
        <span className='text-green-400'>en un seul endroit.</span>
      </h2>
      <ul className='mt-6 flex gap-2'>
        <li  className='font-bold text-gray-400'>
          <NavLink to="/formations">Formations</NavLink>
        </li>

        <li className='font-bold text-gray-400'>
          <NavLink to="/graplisme">Graphisme</NavLink>
        </li>
        <li className='font-bold text-gray-400'>
          <NavLink to="/formations">Maintenance</NavLink>
        </li>
        <li className='font-bold text-gray-400'>
          <NavLink to="/formations">Montage et trucage</NavLink>
        </li>
        <li>
          <NavLink to="/formations">Cours</NavLink>
        </li>
        <li className='font-bold'>
          <NavLink to="/formations">Docs PDF</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Formations;
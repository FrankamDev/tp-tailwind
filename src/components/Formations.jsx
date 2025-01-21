import { NavLink } from "react-router-dom";

const Formations = () => {
  const links = [
    { to: "/formations", label: "Formations" },
    { to: "/graplisme", label: "Graphisme" },
    { to: "/maintenance", label: "Maintenance" },
    { to: "/montage-et-trucage", label: "Montage et trucage" },
    { to: "/cours", label: "Cours" },
    { to: "/docs-pdf", label: "Docs PDF" },
  ];

  return (
    <div className="px-24 gap-4">
      <h2 className="md:text-2xl font-bold">
        Tout ce dont vous avez besoin, <br />
        <span className="text-green-400">en un seul endroit.</span>
      </h2>
      <ul className="mt-6 flex flex-col md:flex-row gap-2 justify-center items-center">
        {links.map(({ to, label }) => (
          <li key={to} className="text-gray-400">
            <NavLink
              to={to}
              className="text-gray-800 hover:underline hover:text-green-500 active:text-green-700"
              end
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formations;

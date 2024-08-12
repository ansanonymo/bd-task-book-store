import { Link, useLocation } from "react-router-dom";

export default function SideBarLink({ children, icon, link }) {
  const { pathname } = useLocation();

  const isActive = link === pathname;

  return (
    <Link
      to={link}
      className={`p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-emerald-600 ${
        isActive ? "bg-emerald-600" : ""
      } text-white text-3xl`}
    >
      {icon}
      <button
        className={`text-[15px] ml-4 text-gray-200 font-bold origin-left whitespace-nowrap`}
      >
        {children}
      </button>
    </Link>
  );
}

import SideBarHeader from "./SideBarHeader";
import SideBarLink from "./SideBarLink";
import { ImBooks } from "react-icons/im";
import { RiDashboardFill } from "react-icons/ri";
import { MdAddBox } from "react-icons/md";

const allLinks = [
  {
    name: "Dashboard",
    link: "/",
    icon: <RiDashboardFill />,
  },
  {
    name: "All Books",
    link: "/books",
    icon: <ImBooks />,
  },
  {
    name: "Add Books",
    link: "/addbook",
    icon: <MdAddBox />,
  },
];

export default function SideNavBar() {
  return (
    <div
      className={`min-h-screen lg:left-0 p-2 overflow-y-auto text-center bg-gray-900 w-80`}
    >
      <SideBarHeader />

      {allLinks.map(({ name, icon, link }) => {
        return (
          <SideBarLink
            close={close}
            key={crypto.randomUUID()}
            icon={icon}
            link={link}
          >
            {name}
          </SideBarLink>
        );
      })}
    </div>
  );
}

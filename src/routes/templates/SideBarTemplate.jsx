import SideNavBar from "../../components/common/SideNavBar/SideNavBar";
import { Outlet } from "react-router-dom";

export default function SideBarTemplate() {
  return (
    <div className="flex flex-row">
      <SideNavBar />
      <Outlet />
    </div>
  );
}

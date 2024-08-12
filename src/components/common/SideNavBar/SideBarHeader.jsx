import { IoBookSharp } from "react-icons/io5";

export default function SideBarHeader() {
  return (
    <div className="text-gray-100 text-xl">
      <div className="flex flex-row items-center flex-wrap">
        <div className="p-2.5 mt-1 flex items-center">
          <IoBookSharp className="text-3xl shrink-0" />
          <h1
            className={`font-bold text-gray-200 shrink-0 text-base ml-3 origin-left overflow-hidden whitespace-nowrap`}
          >
            Books Store
          </h1>
        </div>
      </div>

      <div className="my-2 bg-gray-600 h-[1px]" />
    </div>
  );
}

import { FaSlidersH, FaThLarge, FaBars } from "react-icons/fa";

export default function ShopToolbar() {
  return (
    <div className="bg-[#F9F1E7] px-6 md:px-20 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4 text-gray-700">
          <button className="flex items-center gap-2">
            <FaSlidersH />
            <span>Filter</span>
          </button>

          <FaThLarge className="cursor-pointer" />
          <FaBars className="cursor-pointer" />

          <span className="hidden md:block border-l h-6 mx-2"></span>

          <span className="text-sm">
            Showing 1–16 of 32 results
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <input
              type="number"
              defaultValue={16}
              className="w-16 border px-2 py-1 text-center"
            />
          </div>

          <div className="flex items-center gap-2">
            <span>Sort by</span>
            <select className="border px-2 py-1">
              <option>Default</option>
              <option>Price</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}
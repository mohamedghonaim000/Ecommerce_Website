import bannerImg from "../../../assets/images/shopbg.png";
import { FaChevronRight } from "react-icons/fa";


export default function ShopBanner() {
  return (
    <div
      className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative text-center">
        <h1 className="text-4xl font-bold mb-3">Shop</h1>
        <p className="text-black text-xl flex items-center gap-1">
  <span>Home</span>
  <FaChevronRight className="text-sm" />
  <span>Shop</span>
</p>

      </div>
    </div>
  );
}
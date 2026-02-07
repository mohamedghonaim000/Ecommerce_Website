import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../../Store/Slices/products";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Loader from "../../common/Loader";
import { Link } from "react-router";

export default function ProductsGrid({ page }) {
  const dispatch = useDispatch();

  const {
    data: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsAction(page));
  }, [dispatch, page]);

  if (loading) return <Loader />;

  if (error) return <p className="text-center my-10 text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="group relative border rounded-lg overflow-hidden shadow-sm"
        >
          <img
            src={product.imageCover}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <Link
              to={`/product/${product._id}`}
              className="bg-white text-[var(--primary-color)] px-6 py-2 mb-4 font-semibold"
            >
              Show Details
            </Link>
            <div className="flex gap-4 text-white text-sm">
              <span className="flex items-center gap-2 cursor-pointer">
                <IoShareSocialSharp /> Share
              </span>
              <span className="flex items-center gap-2 cursor-pointer">
                <MdCompareArrows /> Compare
              </span>
              <span className="flex items-center gap-2 cursor-pointer">
                <CiHeart /> Like
              </span>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-medium text-sm mb-1">
              {product.title.split(" ").slice(0, 3).join(" ")}
            </h3>
            <p className="text-gray-500 text-sm mb-2">
              {product.category.name}
            </p>
            <p className="font-semibold">{product.price} EGP</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import {axiosInstance} from "../../Api/axiosInstance";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";




export default function ProductsGrid({ page }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/products?page=${page}&limit=12`)
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  if (loading)
    return <p className="text-center my-10">Loading products</p>;

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
        className="w-full h-48 object-contain"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <button className="bg-white text-[var(--primary-color)] px-6 py-2 mb-4 font-semibold">
          Add to cart
        </button>
        <div className="flex gap-4 text-white text-sm">
          <span className="cursor-pointer flex items-center gap-2"> <IoShareSocialSharp />Share</span>
          <span className="cursor-pointer flex items-center gap-2"> <MdCompareArrows />Compare</span>
          <span className="cursor-pointer flex items-center gap-2"> <CiHeart />Like</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm mb-1">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h3>
        <p className="text-gray-500 text-sm mb-2">{product.category.name}</p>
        <p className="font-semibold">{product.price} EGP</p>
      </div>
    </div>
  ))}
</div>

  );
}

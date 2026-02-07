import { useEffect, useState } from "react";
import { getProductById } from "../../Api/products.Api";
import Loader from "../../Components/loading";
import ImagesGallery from "../../Components/common/ImagesGallery";
import QuantitySelector from "../../Components/common/QuantitySelector";
import ProductInfo from "../../Components/product/ProductInfo";
import ProductDetailsTabs from "../../Components/product/ProductDetailsTabs";
import { useParams } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  // 6428de2adc1175abc65ca05b

  useEffect(() => {
    getProductById(id).then((res) => {
      setProducts(res.data.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b">
        {/* Left: Images */}
        <ImagesGallery products={products} />

        {/* Right: Info */}
        <ProductInfo
          products={products}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <ProductDetailsTabs products={products} />
      </div>
    </div>
  );
}

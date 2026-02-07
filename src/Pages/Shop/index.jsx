import { useState } from "react";
import ShopBanner from "../../Components/ShopPanner";
import ProductsGrid from "../../Components/ProductsGrid";
import Pagination from "../../Components/Pagination";
import ShopToolbar from "../../Components/ShopToolBar";
// import { getProducts } from "../../Api/productsapi";
export default function Shop() {
  const [page, setPage] = useState(1);

  return (
    <>
      <ShopBanner />
      <ShopToolbar/>

      <div className="container mx-auto px-4 py-16">
        <ProductsGrid page={page} />
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
        />
      </div>
    </>
  );
}

import React from "react";

export default function OrderItem({ order }) {
    console.log(order);
    
  return (
    <div className="p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow my-3">
      
      {/* Order Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-lg">
            Order ID : {order._id.slice(-6)}
          </h2>
          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold text-[var(--primary-color)]">
            Total Price :  
            {order.totalOrderPrice} EGP
          </p>
        </div>
      </div>

      {/* Products in this Order */}
      <div className="flex flex-col gap-3">
        {order.cartItems.map((item) => (
          <div
            key={item._id || item.product._id}
            className="flex flex-col sm:flex-row items-center gap-4 p-3 border rounded-md"
          >
            <img
              src={item.product.imageCover}
              alt={item.product.title}
              className="w-32 h-24 sm:w-36 sm:h-28 object-cover rounded-md bg-[var(--secondry-color)]"
            />

            <div className="flex-1 flex flex-col gap-2 font-normal text-[var(--productDetail-text-color)]">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg truncate">{item.product.title}</h3>
                <span className="text-sm sm:text-base font-medium">
                  {item.count * item.price} EGP
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Quantity: {item.count} | Price per item: {item.price} EGP
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

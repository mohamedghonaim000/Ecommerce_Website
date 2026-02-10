import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { getAllorders } from "../../Api/order.Api";
import Loader from "../../Components/loading";
import OrderItem from "../../Components/OrderItem";

export default function Order() {
  const [userId, setUserid] = useState("");
  const [order, setOrder] = useState([]);
  console.log(order);
  

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      let id = jwtDecode(token).id;
      setUserid(id);
    }
  }, []);

  const getOrders = async () => {
      setLoading(true);

    try {
      const result = await getAllorders(userId);
      setOrder(result.data)
      
      
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getOrders();
    }
  } , [userId]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (<>
    <div className="max-w-5xl mx-auto p-4 container">
    <h1 className="text-xl font-bold mb-6">My Orders</h1>

    {
      order.map((ord) => <OrderItem key={ord._id} order={ord} />)
    }
  </div>
  
  </>)
}

import React, { useState, useEffect } from "react";
import OrderContext from "./ordersContext";

const OrderState = (props) => {
  const host = "http://localhost:5000";
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getOrders(); // Fetch orders when the component mounts
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const getOrders = async () => {
    try {
      const response = await fetch(`${host}/api/orders/fetchallorders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching orders: ${response.statusText}`);
      }

      const fetchedOrders = await response.json();
      setOrders(fetchedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  const addOrder=async (items, totalPrice,Restaurant)=>{
    //Api call
    const response = await fetch(`${host}/api/orders/addorder`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({items, totalPrice,Restaurant}),
    });
    const json=await response.json();
    const order=json;
    setOrders((prevOrders) => [...prevOrders, order]);
    console.log(json); 
  }
   

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;

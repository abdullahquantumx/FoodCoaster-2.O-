import React, { useEffect, useState, useContext, useRef } from "react";
import orderContext from "../Context/orders/ordersContext.js";

const History = () => {

  const context = useContext(orderContext);
  const { orders, getOrders } = context;
  const [orderHistory, setOrderHistory] = useState([]);

  const data = useRef();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          await getOrders();
          setOrderHistory(orders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchOrders();
  }, [data.current]);


  return (
    <div className="bg-blue-500 flex flex-col min-h-screen w-screen">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        {orderHistory.length === 0 ? (
          <p>No order history available.</p>
        ) : (
          <ul className="space-y-4">
            {orderHistory.map((order, index) => (
              <li key={index} className="bg-blue-300 rounded-lg p-4">
                <div>
                  <h3 className="text-lg font-semibold">Order {index + 1}</h3>
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <p>ID: {item.orderId}</p>
                      <p>Name: {item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: {item.price}</p>
                      <p>Amount: {item.amount}</p>
                    </div>
                  ))}
                  <p>Restaurant: {order.Restaurant}</p>
                  <p>Total Price: ${order.totalPrice}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default History;

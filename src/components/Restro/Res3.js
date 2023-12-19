import React from "react";

const Res3 = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="">OUT OF SERVICE</div>
    </div>
  );
};

export default Res3;


// import React, { useState, useEffect } from 'react';

// const Cart1 = () => {

//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   const updateCart = (updatedCart) => {
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
//     updateCart(updatedCart);
//   };

//  // ... (previous code)

//  const updateCartItem = (itemId, newQuantity) => {
//     const updatedCart = cart.map((cartItem) =>
//       cartItem.id === itemId
//         ? {
//             ...cartItem,
//             quantity: Math.max(newQuantity, 0),
//             amount: newQuantity * parseFloat(cartItem.price.replace('$', '')),
//           }
//         : cartItem
//     );
//     updateCart(updatedCart);
//   };
  
//   const decreaseQuantity = (itemId) => {
//     const item = cart.find((cartItem) => cartItem.id === itemId);
//     if (item) {
//       const newQuantity = Math.max(item.quantity - 1, 0);
//       updateCartItem(itemId, newQuantity);
//     }
//   };
  
//   const increaseQuantity = (itemId) => {
//     const item = cart.find((cartItem) => cartItem.id === itemId);
//     if (item) {
//       const newQuantity = (item.quantity || 0) + 1;
//       updateCartItem(itemId, newQuantity);
//     }
//   };

//   // ... (remaining code)

//   const placeOrder = () => {
//     // Save the current cart state to order history
//     const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
//     const orderDetails = {
//       restaurantName: "Restaurant1", // Set the restaurant name here
//       items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
//       totalPrice: calculateTotalPrice(),
//     };
//     orderHistory.push(orderDetails);
//     localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  
//     // Clear the current cart after placing the order
//     updateCart([]);
//   };
  
//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.amount || 0), 0).toFixed(2);
//   };

//   return (
//     <div className="bg-blue-500 w-screen min-h-screen flex flex-col items-center justify-start p-8">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cart.map((item) => (
//             <li
//               key={item.id}
//               className="bg-blue-300 rounded-lg p-4 flex items-center justify-between"
//             >
//               <div className="flex items-center">
//                 <p className="mx-4">{item.name}</p>
//                 <p className="text-gray-600 text-sm">{item.price}</p>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   onClick={() => decreaseQuantity(item.id)}
//                   className="text-blue-600 hover:text-blue-900 px-2 py-1"
//                 >
//                   -
//                 </button>
//                 <span className="mx-2">{item.quantity}</span>
//                 <button
//                   onClick={() => increaseQuantity(item.id)}
//                   className="text-blue-600 hover:text-blue-900 px-2 py-1"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-600 hover:text-red-900 ml-4"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="my-6 text-center">
//         <span className="mr-2">Total Price of your Cart: ${calculateTotalPrice()}</span>
//         <div className="mt-4">
//       <button
//         onClick={placeOrder}
//         className="bg-blue-600 text-white rounded-full hover:bg-blue-900 hover:text-gray-200 px-4 py-2"
//       >
//         <h5 className="mx-6 text-m">Place order</h5>
//       </button>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default Cart1;

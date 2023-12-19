import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Res2 = () => {
  const savedCart = localStorage.getItem('cart2'); // Use a different key for Res2
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [warning, setWarning] = useState(false);

  const addToCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 1000);
      return;
    }
    setCart([...cart, item]);
  };

  useEffect(() => {
    localStorage.setItem('cart2', JSON.stringify(cart)); // Use 'cart2' as the key
  }, [cart]);

  const items = [
    { id: 10, name: 'Item 10 - ', price: '$10' },
    { id: 11, name: 'Item 11 - ', price: '$15' },
    { id: 12, name: 'Item 12 - ', price: '$20' },
    { id: 13, name: 'Item 13 - ', price: '$12' },
    { id: 14, name: 'Item 14 - ', price: '$18' },
    { id: 15, name: 'Item 15 - ', price: '$25' },
    { id: 16, name: 'Item 16 - ', price: '$22' },
    { id: 17, name: 'Item 17 - ', price: '$16' },
    { id: 18, name: 'Item 18 - ', price: '$30' },
  ];

  return (
    <div className="bg-blue-500 w-screen min-h-screen flex flex-col items-center justify-start p-8">
      <motion.button
        variants={{
          hidden: { x: 60, opacity: 0 },
          show: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
        className="font-medium text-xl ml-auto bg-blue-300 rounded-full px-6 py-2"
      >
        <Link to="./Carts/Cart2" className="flex flex-row items-center">
          <BsCart3 />
          {cart.length > 0 && <span className="ml-2">{cart.length}</span>}
        </Link>
      </motion.button>
      <div className="font-medium text-xl ml-auto rounded-full px-6 py-4">
        {warning && <div className="text-red-800">Item is already added to your cart</div>}
      </div>

      {items.map((item) => (
        <motion.div
          variants={{
            hidden: { x: 60, opacity: 0 },
            show: { x: 0, opacity: 1 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
          key={item.id}
          className="bg-blue-300 rounded-lg p-4 mb-4 w-full max-w-md flex items-center justify-between"
        >
          <div className="flex">
            <p className="mx-4">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.price}</p>
          </div>
          <button
            onClick={() => addToCart(item)}
            className="bg-blue-600 text-white rounded-full hover:bg-blue-900 hover:text-gray-200 px-2 py-1"
          >
            Add to cart
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Res2;

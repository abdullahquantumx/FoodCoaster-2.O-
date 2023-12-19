import React from "react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const restaurantsData = [
    {
      id: 1,
      name: "Restaurant 1",
      image: "./images/fry.jpg",
      to: "./Restro/Res1",
    },
    {
      id: 2,
      name: "Restaurant 2",
      image: "./images/chicken.jpg",
      to: "./Restro/Res2",
    },
    {
      id: 3,
      name: "Restaurant 3",
      image: "./images/pizza.jpg",
      to: "./Restro/Res3",
    },
    {
      id: 4,
      name: "Restaurant 4",
      image: "./images/pizza.jpg",
      to: "./Restro/Res4",
    },
    {
      id: 5,
      name: "Restaurant 5",
      image: "./images/fry.jpg",
      to: "./Restro/Res5",
    },
    {
      id: 6,
      name: "Restaurant 6",
      image: "./images/dal.jpg",
      to: "./Restro/Res6",
    },
  ];

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gradient-to-br from-blue-500 to-blue-300">
      <div className="flex flex-wrap justify-center">
        {restaurantsData.map((restaurant) => (
          <div
            key={restaurant.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded overflow-hidden shadow-md m-4 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 transition-transform transform hover:scale-105"
          >
            <div className="relative group">
              <img
                className="w-full h-full object-cover hover:scale-105 transform transition-all duration-500 hover:opacity-80"
                src={restaurant.image}
                alt={restaurant.name}
              />
              <Link
                className="absolute bottom-4 left-4 text-white text-2xl font-extrabold opacity-0 group-hover:opacity-100 z-0 hover:z-10 transition-all duration-500"
                to={restaurant.to}
              >
                Order Now
              </Link>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{restaurant.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;

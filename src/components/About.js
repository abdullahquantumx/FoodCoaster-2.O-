import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const contentVariants = {
    hidden: { y: -80, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  
  return (
    <div className="bg-blue-500 w-screen h-screen flex items-center justify-center">
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
        className="bg-blue-300 p-8 w-full max-w-screen-md rounded-full font-mono text-voilet font-bold text-center"
      >
        {/* Your content goes here */}
        {[
          "What we do at FoodCoaster?",
          "We are the only food delivery service at NIT Rourkela campus",
          "All the eateries in the NITR campus will be registered under us.",
          "Through our website, we will be accepting orders from the students and staff residing in NITR.",
          "Each one of them will receive orders through the website and the food will be delivered by one of their workers to the designated location.",
          "In case of the unavailability of workers for the delivery, we would provide the same for the job with some additional charges.",
          "This website acts as a bridge between the students and the vendors."
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={contentVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default About;

// import React from 'react'
// // import {motion} from  'framer-motion'
// import styled, { keyframes } from 'styled-components';

// // import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   //   const navigate= useNavigate();
//   // useEffect(() => {
//   //   if(localStorage.getItem('token')){
//   //     console.log('about');
//   //   }
//   //   else{
//   //     navigate("/login")
//   //   }})
//   return (
//     <>
//     {/* <motion.div
//       variants={{
//         hidden: { y: 30, opacity: 0 },
//         show: { y: 0, opacity: 1 }
//       }}
//       initial='hidden'
//       animate='show'
//       transition={{ duration: 0.6 }}  // Adjust the duration as needed (in seconds)
//       className="text-7xl text-center text-blue-400 "
//     >
//       Order Now!
//     </motion.div> */}
//     <StyledSection>

//       <section>
//         <div className='air air1'></div>
//         <div className='air air2'></div>
//         <div className='air air3'></div>
//         <div className='air air4'></div>
//       </section>
//     </StyledSection>

//     </>
//   )
// }

// export default Home

// const StyledSection=styled.section`
// *{
//   margin: 0;
//   padding: 0;
// }
// section{
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   background: #3586ff;
//   overflow: hidden;
// }
// section .air{
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100px;
//   background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
//   background-size: 1000px 100px
// }
// section .air.air1{
//   animation: wave 30s linear infinite;
//   z-index: 1000;
//   opacity: 1;
//   animation-delay: 0s;
//   bottom: 0;
// }
// section .air.air2{
//   animation: wave2 15s linear infinite;
//   z-index: 999;
//   opacity: 0.5;
//   animation-delay: -5s;
//   bottom: 10px;
// }
// section .air.air3{
//   animation: wave 30s linear infinite;
//   z-index: 998;
//   opacity: 0.2;
//   animation-delay: -2s;
//   bottom: 15px;
// }
// section .air.air4{
//   animation: wave2 5s linear infinite;
//   z-index: 997;
//   opacity: 0.7;
//   animation-delay: -5s;
//   bottom: 20px;
// }
// @keyframes wave{
//   0%{
//     background-position-x: 0px;
//   }
//   100%{
//     background-position-x: 1000px;
//   }
// }
// @keyframes wave2{
//   0%{
//     background-position-x: 0px;
//   }
//   100%{
//     background-position-x: -1000px;
//   }
// }
// `

import React,{useEffect} from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link,useNavigate } from "react-router-dom";

const Home = () => {

  const navigate= useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log('about');
    }
    else{
      navigate("/login")
    }

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <StyledSection>
        <div>
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center h-screen mb-16"
          >
            <motion.p
              variants={{
                hidden: { y: -60, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7 }}
              className="text-5xl text-center text-blue-700 font-medium "
            >
              Hungry huh ?
            </motion.p>
            <Link className="text-3xl text-center text-white font-medium hover:text-4xl ease-in-out duration-200" to='/Restaurants'>
              Order Now
            </Link>
          </motion.div>
          <div>hfeq;ubfik</div>
        </div>

        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </StyledSection>
    </>
  );
};

const waveAnimation = keyframes`
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
`;

const wave2Animation = keyframes`
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1000px;
  }
`;

const StyledSection = styled.section`
  * {
    margin: 0;
    padding: 0;
  }

  position: relative;
  width: 100vw;
  height: 92vh;
  background: #3586ff;
  overflow: hidden;

  .air {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400%;
    height: 100px;
    background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
    background-size: 1000px 100px;
  }

  .air.air1 {
    animation: ${waveAnimation} 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }

  .air.air2 {
    animation: ${wave2Animation} 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }

  .air.air3 {
    animation: ${waveAnimation} 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }

  .air.air4 {
    animation: ${wave2Animation} 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
`;

export default Home;

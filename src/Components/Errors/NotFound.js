import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

const Styled404Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundText = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const AnimatedCharacter = styled(animated.div)`
  width: 100px;
  height: 100px;
  background-color: #ff4081;
  border-radius: 50%;
  position: relative;
`;

const Eye = styled(animated.div)`
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 35%;
  left: 30%;
`;

const Mouth = styled(animated.div)`
  width: 40px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  bottom: 40%;
  left: 30%;
`;

const PageNotFound = () => {
  const navigate=useNavigate();
  const changeRoute=()=>{
    navigate('/')
  }
  const { x, y, mouthOpen } = useSpring({
    x: [0, 10, -10, 0],
    y: [0, -10, 10, 0],
    config: { duration: 2000 },
    loop: true,
  });

  const mouthAnimation = useSpring({
    height: mouthOpen ? "20px" : "10px",
    config: { duration: 200 },
  });

  return (
    <Styled404Page>
     <div onClick={changeRoute}><i className="fa fa-home"></i>click me</div>
      <NotFoundText>This page is Empty 😞</NotFoundText>
      <AnimatedCharacter
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        <Eye
          style={{
            left: "30%",
          }}
        />
        <Eye
          style={{
            left: "60%",
          }}
        />
        <Mouth
          style={{
            width: "40px",
            height: mouthAnimation.height,
            borderRadius: "50% 50% 0 0",
          }}
        />
      </AnimatedCharacter>
    </Styled404Page>
  );
};

export default PageNotFound;

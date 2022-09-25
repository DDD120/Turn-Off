import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &::before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    animation: circleFadeDelay 1.2s infinite ease-in-out both;
  }

  &:nth-of-type(2) {
    transform: rotate(30deg);
    &::before {
      animation-delay: -1.1s;
    }
  }
  &:nth-of-type(3) {
    transform: rotate(60deg);
    &::before {
      animation-delay: -1s;
    }
  }
  &:nth-of-type(4) {
    transform: rotate(90deg);
    &::before {
      animation-delay: -0.9s;
    }
  }
  &:nth-of-type(5) {
    transform: rotate(120deg);
    &::before {
      animation-delay: -0.8s;
    }
  }
  &:nth-of-type(6) {
    transform: rotate(150deg);
    &::before {
      animation-delay: -0.7s;
    }
  }
  &:nth-of-type(7) {
    transform: rotate(180deg);
    &::before {
      animation-delay: -0.6s;
    }
  }
  &:nth-of-type(8) {
    transform: rotate(210deg);
    &::before {
      animation-delay: -0.5s;
    }
  }
  &:nth-of-type(9) {
    transform: rotate(240deg);
    &::before {
      animation-delay: -0.4s;
    }
  }
  &:nth-of-type(10) {
    transform: rotate(270deg);
    &::before {
      animation-delay: -0.3s;
    }
  }
  &:nth-of-type(11) {
    transform: rotate(300deg);
    &::before {
      animation-delay: -0.2s;
    }
  }
  &:nth-of-type(12) {
    transform: rotate(330deg);
    &::before {
      animation-delay: -0.1s;
    }
  }

  @keyframes circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </LoadingContainer>
  );
};

export default Loading;

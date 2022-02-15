import React, { useState } from "react";
import classnames from "classnames";
import "./styles.css";
import styled, { css } from "styled-components";

const SpreadCard = () => {
  const [isSpread, setSpread] = useState(false);

  const handleOnClick = () => {
    setSpread(!isSpread);
    console.log(isSpread);
  };

  const cards = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];
  const translate3dx = (index) => {
    const value = -50 + 0.5 * index;
    return value;
  };
  const translate3dy = (index) => {
    const value = -10 - 0.5 * index;
    return value;
  };

  const rotate = (index) => {
    const value = -31 + 15 * index;
    return value;
  };

  const rotate3dx = (index) => {
    const value = -50 + 36 * index;
    return value;
  };

  const rotate3dy = (index) => {
    const value = -10 + 1.5 * index;
    return value;
  };
  return (
    <Perspective onClick={handleOnClick}>
      <CardContainer className={classnames("card-container")}>
        <div>
          {cards.map((p, index) => {
            return (
              <Card
                isSpread={isSpread}
                key={index}
                translate3dx={translate3dx(index)}
                translate3dy={translate3dy(index)}
                rotate={rotate(index)}
                rotate3dx={rotate3dx(index)}
                rotate3dy={rotate3dy(index)}
              >
                {p}
              </Card>
            );
          })}
        </div>
      </CardContainer>
    </Perspective>
  );
};

const Perspective = styled.div`
  height: 100vh;
  perspective: 2000px;
  position: absolute;
  width: 100vw;
  background: #e7e7e7;
`;

const CardContainer = styled.div`
  cursor: pointer;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: rotateX(35deg) translate3d(-50%, -50%, 0);
  height: 45vw;
  width: 32vw;
  max-height: 450px;
  max-width: 320px;
`;

const Card = styled.div`
  position: absolute;
  background: #eeeae7;
  width: 32vw;
  height: 45vw;
  max-height: 450px;
  max-width: 320px;
  min-height: 225px;
  min-width: 160px;
  border-radius: 20px;
  box-shadow: 0 1px 2px 0 rgba(151, 150, 146, 0.4),
    0 4px 12px 0 rgba(151, 150, 146, 0.4);
  transition: all ease-in 0.3s;
  user-select: none;
  transform: rotate(-31deg)
    translate3d(
      ${(props) => props.translate3dx}%,
      ${(props) => props.translate3dy}%,
      0
    );
  ${(props) =>
    props.isSpread &&
    css`
      transform: rotate(${(props) => props.rotate}deg)
        translate3d(
          ${(props) => props.rotate3dx}%,
          ${(props) => props.rotate3dy}%,
          0
        );
    `}
`;
export default SpreadCard;

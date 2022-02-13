import React, { useState } from "react";
import classnames from "classnames";
import "./styles.css";

const SpreadCard = () => {
  const [isSpread, setSpread] = useState(false);

  const handleOnClick = () => {
    setSpread(!isSpread);
    console.log(isSpread);
  };
  return (
    <div className={classnames("perspective")}>
      <div className={classnames("card-container")}>
        <button onClick={handleOnClick}>spread</button>
        <div>
          <div className={classnames(["card", "card1"], { spread1: isSpread })}>
            A
          </div>
          <div className={classnames(["card", "card2"], { spread2: isSpread })}>
            B
          </div>
          <div className={classnames(["card", "card3"], { spread3: isSpread })}>
            C
          </div>
          <div className={classnames(["card", "card4"], { spread4: isSpread })}>
            D
          </div>
          <div className={classnames(["card", "card5"], { spread5: isSpread })}>
            e
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadCard;

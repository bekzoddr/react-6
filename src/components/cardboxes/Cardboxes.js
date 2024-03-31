import { React, memo } from "react";
import img1 from "../../assets/images/onion.svg";
import img2 from "../../assets/images/yogurt.svg";
import img3 from "../../assets/images/vegetables.svg";
function Cardboxes() {
  return (
    <div className="card__boxes">
      <div className="card__box">
        <h2>Everyday Fresh & Clean with Our Products</h2>
        <button>Shop Now</button>
        <img src={img1} alt="onion" />
      </div>
      <div className="card__box">
        <h2>Make your Breakfast Healthy and Easy</h2>
        <button>Shop Now</button>
        <img src={img2} alt="yogurt" />
      </div>
      <div className="card__box">
        <h2>The best Organic Products Online</h2>
        <button>Shop Now</button>
        <img src={img3} alt="vegetables" />
      </div>
    </div>
  );
}

export default memo(Cardboxes);

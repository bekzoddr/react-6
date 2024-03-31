import { React, memo } from "react";
import { MdCancel } from "react-icons/md";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__title">
        <h3>
          100%
          <span> Organic Vegetables</span>
        </h3>
        <h1>The best way to stuff your wallet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br />
          reiciendis beatae consequuntur.
        </p>
        <div className="heroBtns">
          <input type="text" placeholder="Your emaill address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="buttons">
        <button>
          <MdCancel />
          <h4>Shopping</h4>
        </button>
        <button>
          <MdCancel />
          <h4>Resips</h4>
        </button>
        <button>
          <MdCancel />
          <h4>Kitchen</h4>
        </button>
        <button>
          <MdCancel />
          <h4>News</h4>
        </button>
        <button>
          <MdCancel />
          <h4>Food</h4>
        </button>
      </div>
    </div>
  );
}

export default memo(Hero);

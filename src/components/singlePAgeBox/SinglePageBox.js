import React from "react";

function SinglePageBox() {
  return (
    <div className="box">
      <h2 className="box__title">Product Category</h2>
      <br />
      <hr />
      <br />
      <div className="product__check">
        <div className="task">
          <div className="check">
            <input type="checkbox" id="cbx" />
            <h3 className="name">Juice & Drinks</h3>
          </div>
          <div className="cost">
            <h3 className="second name">[20]</h3>
          </div>
        </div>
        <div className="task">
          <div className="check">
            <input type="checkbox" id="cbx" />
            <h3 className="name">Dairy & Milk</h3>
          </div>
          <div className="cost">
            <h3 className="second name">[54]</h3>
          </div>
        </div>
        <div className="task">
          <div className="check">
            <input type="checkbox" id="cbx" />
            <h3 className="name">Snack & Spice</h3>
          </div>
          <div className="cost">
            <h3 className="second name">[40]</h3>
          </div>
        </div>
      </div>
      <br />
      <h2 className="box__title">Filter By Price</h2>
      <br />
      <hr />
      <br />
      <input type="range" className="range" />
      <br />
      <br />
      <h1 className="prices">
        Price :<span>$20 - $250</span>
      </h1>
      <br />
      <button className="filter">Filter</button>
      <br />
      <br />
      <h2 className="box__title">product Category</h2>
      <br />
      <hr />
      <br />
      <div className="checkColor">
        <div className="task">
          <div className="checkbox">
            <input type="checkbox" />
            <h3 className="name">Blue</h3>
          </div>
          <div className="blue"></div>
        </div>
        <div className="task">
          <div className="checkbox">
            <input type="checkbox" />
            <h3 className="name">Yellow</h3>
          </div>
          <div className="yellow"></div>
        </div>
        <div className="task">
          <div className="checkbox">
            <input type="checkbox" />
            <h3 className="name">Red</h3>
          </div>
          <div className="red"></div>
        </div>
        <div className="task">
          <div className="checkbox">
            <input type="checkbox" />
            <h3 className="name">Green</h3>
          </div>
          <div className="green"></div>
        </div>
      </div>
      <br />
      <br />
      <h2 className="box__title">Weight</h2>
      <br />
      <hr />
      <div className="tasks">
        <div className="task">
          <input type="checkbox" />
          <h3 className="name">2kg Pack</h3>
        </div>
        <div className="task">
          <input type="checkbox" />
          <h3 className="name">20kg Pack</h3>
        </div>
        <div className="task">
          <input type="checkbox" />
          <h3 className="name">30kg Pack</h3>
        </div>
      </div>
    </div>
  );
}

export default SinglePageBox;

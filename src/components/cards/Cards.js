import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsCart3 } from "react-icons/bs";
import star from "../../assets/images/star.png";
import Loading from "../loading/Loading";
const API_URL = "https://fakestoreapi.com/products";

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let products = data?.map((el) => (
    <div key={el.id} className="product__card">
      <button className="check">Hot</button>
      <img className="image" src={el.image} alt="lemon" />
      <h1 className="name">{el.category}</h1>
      <h1 className="title">{el.title}</h1>
      <div className="rating">
        <img src={star} alt="star" />
        <p className="voice"></p>
      </div>
      <h4 className="addres">
        By<span>Nestfood</span>
      </h4>
      <div className="card__bottom">
        <h2 className="price">
          {el.price}$<span>({el.rating.rate})</span>
        </h2>
        <button className="cart">
          <BsCart3 />
          <h3>Add</h3>
        </button>
      </div>
    </div>
  ));
  return (
    <>
      {loading && <Loading />}
      <div className="product__cards">{products}</div>
    </>
  );
}

export default Cards;

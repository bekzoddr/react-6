import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import star from "../../assets/images/star.png";
import Loading from "../loading/Loading";
import { API_URL } from "../../static";
function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [categoriesValue, setCategoriesValue] = useState();
  const [count, setCount] = useState(4);

  useEffect(() => {
    axios
      .get(`${API_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    let url =
      categoriesValue === " "
        ? `${API_URL}?limit=${count}`
        : `${API_URL}/category/${categoriesValue}`;
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count, categoriesValue]);
  const getCategory = (text) => {
    setCategoriesValue(text);
    setData([]);
  };
  let products = data?.map((el) => (
    <div key={el.id} className="product__card">
      <button className="check">Hot</button>
      <Link to={`/singlePage/${el.id}`}>
        <img className="image" src={el.image} alt="lemon" />
      </Link>
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

  // let categoryItems = categories?.map((el, inx) => (
  //   <option key={inx} value={el}>
  //     {el}
  //   </option>
  // ));
  let categoryItems = categories?.map((el, inx) => (
    <li onClick={() => getCategory(el)} key={inx}>
      {el}
    </li>
  ));

  return (
    <>
      {loading && <Loading />}
      <ul className="categories">
        <li onClick={() => getCategory(" ")}>All</li>
        {categoryItems}
      </ul>
      <div className="product__cards">{products}</div>
      <div className="see__more">
        <button onClick={() => setCount((p) => p + 4)} className="btn-see">
          See more
        </button>
      </div>
    </>
  );
}

export default Cards;

import React, { useEffect, useState } from "react";
import SinglePageBox from "../../components/singlePAgeBox/SinglePageBox";
import { MdOutlineStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../static";
import Loading from "../../components/loading/Loading";
function SingleRoute() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="single__page">
      <SinglePageBox />
      <div className="product__image">
        <div className="global__img">
          <img src={product?.image} alt="" />
        </div>
        <div className="images">
          <img src={product?.image} alt="image" />
          <img src={product?.image} alt="image" />
          <img src={product?.image} alt="image" />
          <img src={product?.image} alt="image" />
          <img src={product?.image} alt="image" />
        </div>
      </div>
      <div className="product__info">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <br />
        <hr />
        <br />
        <div className="rating">
          <div className="stars">
            <MdOutlineStar className="star" />
            <MdOutlineStar className="star" />
            <MdOutlineStar className="star" />
            <MdOutlineStar className="star" />
            <MdOutlineStar className="star" />
          </div>
          <p>({product?.rating.rate} Rewiew)</p>
        </div>
        <div className="types">
          <div className="type">
            <h2>Brand</h2>
            <p>
              <span>:</span>ESTA BETTERU CO
            </p>
          </div>
          <div className="type">
            <h2>Flavour</h2>
            <p>
              <span>:</span>Super Saver Pack
            </p>
          </div>
          <div className="type">
            <h2>Diet Type</h2>
            <p>
              <span>:</span>Vegetarian
            </p>
          </div>
          <div className="type">
            <h2>Weight</h2>
            <p>
              <span>:</span>200 Grams
            </p>
          </div>
          <div className="type">
            <h2>Speciality</h2>
            <p>
              <span>:</span>Gluten Free, Sugar Free
            </p>
          </div>
          <div className="type">
            <h2>Info</h2>
            <p>
              <span>:</span>Egg Free, Allergen-Free
            </p>
          </div>
          <div className="type">
            <h2>Items</h2>
            <p>
              <span>:</span>1
            </p>
          </div>
        </div>
        <div className="product__price">
          <h1>${product?.price}</h1>
          <p style={{ textDecoration: "line-through" }}>$123.25</p>
        </div>
        <div className="amount">
          <h2>Size/Weight :</h2>
          <div className="buttons">
            <button>50kg</button>
            <button>80kg</button>
            <button>120kg</button>
            <button>200kg</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoute;

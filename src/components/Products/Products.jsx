import React, { useEffect, useState } from "react";
import "./products.css";
import { Link, useParams } from "react-router-dom";
import Data from "../../Data.json";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  // useEffect(() => {
  //  const getProducts = async () =>{
  //     setLoading(true)
  //     const respose = await fetch("https://fakestoreapi.com/products")
  //     if(componentMounted){
  //         setData(await respose.clone() .json())
  //         setFilter(await respose.json())
  //         setLoading(false)
  //         console.log(filter)
  //     }
  //  }
  //  getProducts()
  // }, []);

  useEffect(() => {
    if (componentMounted) {
      setData(Data);
      setFilter(Data);
      setLoading(false);
    }
  }, []);

  console.log(filter);

  const Loading = () => {
    return <div className="loading">Loading...</div>;
  };

  const filterProduct = (cat) => {
    const upDateList = data.filter((x) => x.category === cat);
    setFilter(upDateList);
  };

  const ShowProducts = () => {
    return (
      <div className="cont1">
        <div className="ButtonsShop">
          <button
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              filterProduct("boards");
            }}
          >
            Boards
          </button>
          <button
            onClick={() => {
              filterProduct("suits");
            }}
          >
            Suits
          </button>
          <button
            onClick={() => {
              filterProduct("accesories");
            }}
          >
            Accesories
          </button>
        </div>
        <div className="shopCardContainer">
          {filter.map((product) => {
            return (
              <div key={product.id}>
                <div className="productCard">
                  <div className="imgContainer">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="cardBody">
                    <h5 className="cardTitle">{product.title}</h5>
                    <p className="cardText">$ {product.price}</p>
                    <Link to={`/shop/${product.id}`}>
                      <button>Ver Producto</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="productsContainer">
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}

export default Products;

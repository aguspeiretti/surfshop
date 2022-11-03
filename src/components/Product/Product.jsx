import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBarDark from "../NavBarDark/NavBarDark";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import "./product.css";
import Data from "../../Data.json";

function Product() {
  // const { id } = useParams();
  // const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // useEffect(() => {
  //    const getProduct = async () =>{
  //     setLoading(true);
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  //     setProduct(await response.json())
  //     setLoading(false)
  //    }
  //    getProduct( );

  // }, []);

  const proid = useParams();
  const proDetail = Data.filter((x) => x.id == proid.id);
  const product = proDetail;
  console.log(product);

  const Loading = () => {
    return <div className="productloading">Loading...</div>;
  };

  const ShowProduct = () => {
    return (
      <div className="oneProductContainer">
        <div className="oneProductCard">
          <div className="con1">
            <div className="imgProducto">
              <img src={product[0].image} alt="" />
            </div>
          </div>
          <div className="con2">
            <div className="categoriaProducto">
              <h4> {product[0].category}</h4>
            </div>
            <div className="tituloProducto">
              <h1>{product[0].title} </h1>
              <div className="rating">
                {/* <p> Rating {product.rating && product.rating.rate}</p> */}
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="precioProducto">
              <h3> $ {product[0].price}</h3>
            </div>
            <div className="productDescription">
              <p>{product[0].description}</p>
            </div>
            <button
              className="productButton"
              onClick={() => addProduct(product[0])}
            >
              {" "}
              Agregar al carrito
            </button>
            <Link to="/Cart">
              <button className="productButtonCart"> Ver Carrito</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="prodContainer">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </>
  );
}

export default Product;

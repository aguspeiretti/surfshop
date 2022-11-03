import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delCart } from "../redux/action/index";
import handleCart from "../redux/reducer/handleCart";
import "./cart.css";

function Cart() {
  let total = 0;
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItems) => {
    return (
      <>
        <div className="productoEnCarrito" key={cartItems.id}>
          <div className="carritoImagen">
            <img src={cartItems.image} alt="" />
          </div>
          <div className="carritoTitulo">
            <h2>{cartItems.title}</h2>
          </div>
          <div className="carritoPrecio">
            <h3>${cartItems.price}</h3>
          </div>
          <button
            onClick={() => handleClose(cartItems)}
            className="botonCarrito"
          >
            X
          </button>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="carritoVacio">
        <h1>YOUR CART IS EMPTY</h1>
      </div>
    );
  };

  const button = () => {
    return (
      <div>
        <Link to={"/Contact"}>
          <button>Proced to CheckOut</button>
        </Link>
      </div>
    );
  };

  const pago = (pago) => {
    total = total + pago.price;
    return (
      <>
        <div>
          <div className="nombreP">
            <div>{pago.title}</div>
            <div>${pago.price}</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cartContainer">
        <div className="bloques">
          <div className="pCarrito">
            <h2>Products</h2>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
          </div>
          <div className="check">
            <h1>CheckOut</h1>

            <div className="pago">{state.length !== 0 && state.map(pago)}</div>
            <div className="total">
              <h2>TOTAL</h2>
              <h2>${total}</h2>
            </div>
            <div className="botonPago">{state.length !== 0 && button()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

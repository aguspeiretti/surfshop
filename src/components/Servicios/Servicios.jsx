import React, { useEffect, useState } from "react";
import "./servicios.css";
import json from "../../servicios.json";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

function Servicios() {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div className="serviciosContainer">
      <div className="preciosContainer">
        {json.map((plan) => {
          return (
            <div key={plan.id} className={"card" + " " + "bx" + plan.id}>
              <h1>{plan.title}</h1>
              <h3>Precio: $ {plan.price}</h3>
              <p>Cantidad de clases: {plan.clases}</p>
              <p>Objetivo: {plan.objetivo}</p>
              <button onClick={() => addProduct(plan)}>RESERVAR</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Servicios;

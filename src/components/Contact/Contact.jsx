import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import handleCart from "../redux/reducer/handleCart";
import "./contact.css";

function Contact() {
  const [buy, setBuy] = useState(true);

  const gracias = () => {
    setBuy(false);
  };

  return (
    <>
      <div className="contactContainer">
        {buy ? (
          <div className="aMessage">
            <div className="title">
              <h1>SEND US A MESSAGE</h1>
            </div>
            <div>
              <div className="inputs">
                <div>
                  <label>First name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Last name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Phone number</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" />
                </div>
              </div>
              <div className="Message">
                <label>Message</label>
                <textarea name="message" id="" cols="30" rows="3"></textarea>
              </div>
              <button onClick={gracias} className="pay">
                REGISTER & PAY
              </button>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <h2 className="gracias">GRACIAS POR TU COMPRA!</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;

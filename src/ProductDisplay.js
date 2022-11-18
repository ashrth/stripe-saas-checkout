import {Link, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
<>
<section className="head">
      <div className="product">
        
        <div className="description">
          <h3>Growth Package</h3>
          <h5>$2,450.00 USD / month</h5>
        </div>
      </div>
      <form
        action="https://stripetestcheckout.herokuapp.com/api/v1/main/create-checkout-session-scale-growth"
        method="POST"
      >
        <div className="tac">
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
      </div>
        <button  type="submit">Checkout</button>
      </form>
      
  
      </section>

      <section className="head">
      <div className="product">
        
        <div className="description">
          <h3>Scale Package</h3>
          <h5>$3,150.00 USD / month</h5>
        </div>
      </div>
      <form
        action="https://stripetestcheckout.herokuapp.com/api/v1/main/create-checkout-session-scale"
        method="POST"
      >
        <div className="tac">
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
      </div>
        <button  type="submit">Checkout</button>
      </form>
      
  
      </section>

      <section className="head">
      <div className="product">
        
        <div className="description">
          <h3>Growth Package + Scale Package</h3>
          <h5>$5,600.00 USD / month</h5>
        </div>
      </div>
      <form
        action="https://stripetestcheckout.herokuapp.com/api/v1/main/create-checkout-session-both"
        method="POST"
      >
        <div className="tac">
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
      </div>
        <button  type="submit">Checkout</button>
      </form>
      
  
      </section>
</>
    
      
  );
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
 

  function Main() {
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("success")) {
        setMessage("Order placed! You will receive an email confirmation.");
      }
  
      if (query.get("canceled")) {
        setMessage(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }
    }, []);

  
    return message ? <Message message={message} /> : <ProductDisplay />;
  }

  export default Main
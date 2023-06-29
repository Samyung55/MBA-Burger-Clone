import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className="carItem">
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
        </div>

        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value} />
            <button onClick={increment}>+</button>
        </div>
    </div>
)
import { useState } from "react";
import './Card.css';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    return (
      <div className="star-rating" >
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button type="button" id="star" key={index} className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };


function Card({item, cartItems, handleAddToCard}){


    return(
        <div className="col-lg-4 mb-2" >
        <div className="card" style={{width: "17rem"}}>
    <img src={item.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">₹{item.price}</p>
      <StarRating ></StarRating>
      <button className="btn btn-primary" disabled={cartItems.some((obj)=> obj.id === item.id)} onClick={()=>{handleAddToCard(item)}}>Add to Cart</button>
    </div>
  </div>
      </div>
    )
}

export default Card;
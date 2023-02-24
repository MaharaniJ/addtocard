function Cartitem({cartItem,  removeFromAddToCard}){
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{cartItem.title}</div>
      {cartItem.price}
    </div>
    <button onClick={()=> removeFromAddToCard(cartItem)} className="badge bg-primary rounded-pill">Remove</button>
  </li>
    )
}

export default Cartitem;
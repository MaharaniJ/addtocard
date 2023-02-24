
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Cartitem from './Cartitem';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


function App() {
  const product = [
    {
      id: 1,
      title: "Jewellery",
      image: "https://m.media-amazon.com/images/I/71Om6ap51VS._AC_UL320_.jpg",
      price: 40000
    },
    {
      id: 2,
      title: "FaceMask",
      image: "https://m.media-amazon.com/images/I/61Ur6uVWDML._AC_UL320_.jpg",
      price: 60000
    },
    {
      id: 3,
      title: "Kitchen Tool Set",
      image: "https://m.media-amazon.com/images/I/71kcEYwb4kL._AC_UY218_.jpg",
      price: 50000
    },
    {
      id: 4,
      title: "Laptop",
      image: "https://m.media-amazon.com/images/I/61y4yt0L2oL._AC_UY218_.jpg",
      price: 70000
    },
    {
      id: 5,
      title: "HeadPhones",
      image: "https://m.media-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_02_sbc_v1_564x564_in-en._CB657839327_.jpg",
      price: 90000
    },
    {
      id: 6,
      title: "Bithday Gift",
      image: "https://m.media-amazon.com/images/I/41vHeuKJWcS._AC_UL320_.jpg",
      price: 4000
    }
  ]

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const AddToCard = (item) => {
    setCart([...cart, item])
    setTotal(total + item.price)
  }

  const removeFromAddToCard = (item) => {
    alert(item.title)
    const index = cart.findIndex((obj) => obj.id === item.id)
    cart.splice(index, 1);
    setCart([...cart])
    setTotal(total - item.price)

  }

  return (
    <>   
  <Header></Header>

     <div className="container">
      <div className="row">
        
        <div className="col-lg-8 ">

          <div className="row">
            {
              product.map((item) =>

                <Card item={item} cartItems={cart} handleAddToCard={AddToCard}></Card>
              )
            }

          </div>
        </div>
        <div className="col-lg-4">
          {
            cart.length === 0 ? (
              <div>No items in Cart</div>
            ) : (
              <div className="row">
                <ol class="list-group list-group-numbered">
                  {
                    cart.map((cartItem) => {
                      return <Cartitem cartItem={cartItem} removeFromAddToCard={removeFromAddToCard}></Cartitem>
                    })
                  }
                </ol>

              </div>

            )
          }
          <h1>Total-{total}</h1>

        </div>
      </div>
    </div>
    <Footer></Footer>
    </>

  );
}

export default App;

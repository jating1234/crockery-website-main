import React from 'react'
import "./css/cart.css"

function Cart({ cart, setCart ,id }) {

  const remove = (id) => {
    setCart( cart.filter((e) => e.id != id))
  }
  return (
    <div className='cart paddings'>

      <h1 className='primaryText cart_head'>Shopping Cart</h1>

      {
        cart.map((item, i) => (
          <div className="cart_items" key={i} >
            <img width={150} src={item.image} alt="" />
            <div className='cart centerBox'>
              <h3 className='cart_Name'>{item.name}</h3>
              <br />
              <p>{item.sales_price}</p>
              <button onClick={() => {
                remove(item.id)
              }} className='button '>Remove</button>
            </div>
          </div>

        ))
      }

    </div>

  )
}

export default Cart
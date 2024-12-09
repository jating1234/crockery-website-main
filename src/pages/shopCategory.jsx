import React, { useContext } from 'react'
import './css/shopCategory.css'
import Rcollection from '../component/Hero-right-collection/r-collection'
import values from '../util/All_product';

function shopCategory({ cart, setCart , id , ...props }) {

  return (
    <div className='shop-category'>
      <div className="banner">
        <img src={props.banner} alt="banner" />
      </div>

      <div className="collections-data">
        {
          values.map((data, i) => {
            if (props.Category === data.Category) {
              return <Rcollection key={i} id={data.id} name={data.name} image={data.image} sales_price={data.sales_price} old_price={data.old_price} cart={cart} setCart={setCart} />
            }
            else null;
          })
        }
      </div>

      <div className="more-btn">
        <a href="https://nestasia.in/collections/cup-mug" className='button'>More...</a>
      </div>

    </div>
  )
}

export default shopCategory
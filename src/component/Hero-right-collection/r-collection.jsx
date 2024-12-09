
import { React } from 'react';
import './r-collection.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Rcollection({cart, setCart, ...props }) {

 

    const addToCart =(id, name, image, sales_price )=>{

        const obj={
            id, name, image, sales_price
        }

        setCart([...cart,obj])
        
        toast.success("Item added on Cart",{
            position:"top-right",
            autoClose:1500,
            
        });
    }


    return (

        <div className="r-collection">

            <div className="card-box flexcol">

                <div className="card-img" >
                    <img src={props.image} alt="logo" />
                </div>

                <div className="card-details">
                    <p>{props.name}</p>
                    <div className="price">
                        <h3>{props.sales_price}</h3>
                        <h3 style={{ textDecorationLine: "line-through" }}>{props.old_price}</h3>
                    </div><br />

                    <button
                    onClick={()=>{addToCart(props.id,props.name, props.image, props.sales_price)}}
                     className='button centerBox'>Add to Cart</button>
                </div>
            </div>

        </div>

    )
}

export default Rcollection;

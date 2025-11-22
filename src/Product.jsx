import { useDispatch, useSelector } from 'react-redux'
import './header.css'
import { addItem, removeItem } from './rtx/slice'
import { useEffect } from 'react'
import { fetchProduct } from './rtx/productSlice'

function Product() {
   const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProduct())
    
  },[])
  const selector=useSelector((state)=>state.products.item)
    console.log(selector);
    const cartSelector = useSelector((state)=>state.cart.items)
 
  return (
  <div className="grid">
    {
      selector.length && selector.map((item)=>(
        <div key={item.id} className="cart">
          <img src={item.thumbnail} alt="" />
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="brand">Brand:{item.brand}</div>
            <div className="price">Price:{item.price}</div>
            <div className="stock">Stock:{item.stock}</div>
            <div className="rating">Rating:{item.rating}</div>
            {
              cartSelector.find(cartItem =>cartItem.id === item.id)?
             <button onClick={()=>dispatch(removeItem(item))} className="remove-from-cart">Remove from Cart</button>
             :
              <button onClick={()=>dispatch(addItem(item))} className="add-to-cart">Add to Cart</button>
            
            }

          </div>
        </div>
      ))
    }
  </div>

  )
}

export default Product
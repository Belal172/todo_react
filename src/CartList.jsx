import { useSelector } from "react-redux"

function CartList(){
    const catrSelector= useSelector((state)=>state.cart.items)
    console.log(catrSelector);
    

    return(
       <div className="cart-container">
        <div className="cart-header">

        </div>
        {
            catrSelector.length >0 ?catrSelector.map((item)=>(
                <div className="item-info">
                    <img src={item.thumbnail} alt="" />
                    <div className="item-details">
                        <h4>{item.title}</h4>
                        <p>{item.brand}</p>
                        
                    </div>
                    <div className="item-actions">
                        <span className="price">Price:{item.price}</span>
                        <button className="remove-from-cart">Remove</button>
                    </div>
                </div>
            )):null
        }
        <div className="cart-footer">
            Total :{catrSelector.reduce((sum,item)=>sum+=item.price,0)}
        </div>
       </div>
    )
}
export default CartList
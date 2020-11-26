import React from 'react';


    export default function Basket(props) {
    const { cartItems,setCartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const clear = () =>{
     setCartItems([])
    }
    return (
        <aside className="block col-6">
            <h3>Cart Items</h3>
            <div>{cartItems.length === 0 && <div>El Carrito Esta vacio</div>}</div>
            {cartItems.map((item) => (
                <div Key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onRemove(item)} className="remove">
                            -
                        </button>

                        <button onClick={() => onAdd(item)} className="add">
                            +
                       </button>

                    </div>
                    <div className="col-2 text-right">
                        {item.qty}x ${item.price.toFixed(2)}
                    </div>
                </div> 
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right"> ${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">
                            ${shippingPrice.toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-2 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="btn-group">
                            <button className="btn btn-danger" onClick={clear}>
                                Eliminar
                        </button>

                            <button className="btn btn-success" onClick={() => alert('Implement Checkout!')}>
                                Checkout
                        </button>
                        </div>




                    </div>
                </>
            )}

        </aside >
    );
}
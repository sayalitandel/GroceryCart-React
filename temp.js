import React from 'react';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onRemove(item)} className='remove'>
                            -
                        </button>
                        <button onClick={() => onAdd(item)} className='add'>
                            +
                        </button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Items Price</div>
                        <div className='col-2 text-right'>${itemsPrice.tofixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax Price</div>
                        <div className='col-2 text-right'>${taxPrice.tofixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping Price</div>
                        <div className='col-2 text-right'>${shippingPrice.tofixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'><strong>Total Price</strong></div>
                        <div className='col-2 text-right'><strong>${totalPrice.tofixed(2)}</strong></div>
                    </div>
                </>
            )}
        </aside>
    );
}
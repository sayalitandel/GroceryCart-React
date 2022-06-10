import React from 'react';
// import logo from '../image-logo.png';

export default function Header(props) {
    const { countCartItems } = props;
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    {/* <img src={logo} height={100} width={100} alt='Logo'></img> */}
                    <h1>Grocery Shop</h1>
                </a>
            </div>
            <div className='theme'>
                <strong>
                    <a href="#/cart">Cart {''}
                        {countCartItems ? (
                            <button className='badge'>{countCartItems}</button>
                        ) : (
                            ''
                        )}
                    </a>
                    <a href="#/sign-in">Sign in</a>
                </strong>
            </div>
        </header>

    );
}
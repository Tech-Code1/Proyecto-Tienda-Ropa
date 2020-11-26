import React from 'react';

export default function Header(props) {
    const { countCartItems} = props;
    return (
        <header className="block row center">
            <div>
            <a href="#/">
            <h1>Carro de Compras</h1>
            </a>
            </div>
            <div>
                <a href="#/cart">
                    Cart {''}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                     ''
                        
                    )}
                </a>
                
            </div>
        </header>
    );
}

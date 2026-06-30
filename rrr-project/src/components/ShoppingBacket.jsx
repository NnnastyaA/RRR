import { useState } from "react";

const ShoppingBacket = () => {
    const [cart, setCart] = useState([
        { id: 1, title: "Футболка", count: 1 },
        { id: 2, title: "Кепка", count: 2 },
    ]);
    return (
        <div>
            <h2>Корзина товаров</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3 >{item.title} (Кол-во: {item.count})</h3>
                    <button onClick={() => setCart(cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem))}>+1</button>
                    <button onClick={() => setCart(cart.filter((cartItem) => cartItem.id !== item.id))}>Удалить</button>
                 </div>
            ))}
            <button onClick={() => setCart([])}>Очистить корзину</button>
        </div>
    )
}

export default ShoppingBacket;

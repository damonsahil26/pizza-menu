import { PizzaCard } from "./PizzaCard";
import { pizzaData } from "../data.js"

export const Menu = () => {
    console.log(pizzaData);
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {
                    pizzaData.map(pizzaType => (
                        <PizzaCard name={pizzaType.name} ingredients={pizzaType.ingredients} price={pizzaType.price} photoName={pizzaType.photoName} soldOut={pizzaType.soldOut} key={pizzaType.name} />
                    ))
                }
            </ul>
        </main>
    );
}
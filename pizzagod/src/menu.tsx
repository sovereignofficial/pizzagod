import { PizzaBlockProps } from "./app"
import { AppProps } from "./app"

const PizzaBlock = ({ name, ingredients, price, photoName }: PizzaBlockProps) => {
    return (
        <div className="pizza">
            <img src={photoName} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <h5>Price:{price}$</h5>
            </div>
        </div>
    )
}

export const Menu = ({ pizzaData }: AppProps) => {
    return (
        <section className='menu'>
            <h2>Our Menu</h2>
            <div className="pizzas">
                {pizzaData.map((pizza, index) => (
                    <PizzaBlock key={index} {...pizza} />
                ))}
            </div>
        </section>
    )
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './lib/data';

const App = () => {
 
    return (
        <div>
            {pizzaData.map((pizza,index)=>(
                <PizzaBlock key={index} {...pizza}/>
            ))}
        </div>
    )
}
type PizzaBlockProps = {
    name:string,
    ingredients:string,
    price:number,
    photoName:string,
}
const PizzaBlock = ({name, ingredients, price, photoName}:PizzaBlockProps)=>{
    return (
        <div>
          <img src={photoName}/>
          <h1>{name}</h1>
          <p>{ingredients}</p>
          <h5>Price:{price}$</h5>
        </div>
    )
} 
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
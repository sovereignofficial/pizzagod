import { Header } from "./header"
import { Menu } from "./menu"
import { Footer } from "./footer"

export interface PizzaBlockProps {
    name:string,
    ingredients:string,
    price:number,
    photoName:string,
    soldOut:boolean
}

type PizzaData = PizzaBlockProps[];

export interface AppProps{
    pizzaData: PizzaData;
}

export function App({pizzaData}:AppProps){
 
    return (
        <div className="container">
            <Header/>
            <Menu pizzaData={pizzaData}/>
            <Footer/>
        </div>
    )
}
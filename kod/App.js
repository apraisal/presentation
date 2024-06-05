import { react } from 'react'
import { useState } from 'react'
import "./example.css"

const auta = [
    { title: 'BMW', isAuto: true, id: 1 },
    { title: 'Audi', isAuto: true, id: 2 },
    { title: 'Romet', isAuto: false, id: 3 },
]
function Blank() {
    return(
        <p>Nie kliknąleś guzika 10 razy.</p>
    );
}
function List() {
    const ListVechicles = auta.map(auto =>
        <li
        key={auto.id}
        style={{
            color: auto.isAuto ? 'green' : 'red'
        }}>
            {auto.title}
        </li>
    )
    return(
        <>
        <p>Czy Auto?</p>
        <ul>{ListVechicles}</ul>
        </>
    );
}
function Photo(){
    return(
        <img src="./logo192.png" alt="a"></img>
    );
}
export default function App() {
    const [count, setCount] = useState(0);
    let content;
    function handleClick() {
        setCount(count + 1);
    }
    if (count < 10){
        content = <Blank/> //tutaj był <p>tymczasowy</p>
    }
    else if (count >= 10){
        content = <List/> // tutaj był <p>Lista</p>
    }
    return(
        <>
        <h1>Witaj na mojej stronie!</h1>
        <button onClick={handleClick}>Kliknąłeś mnie {count} razy.</button>
        <div>{content}</div>
        <Photo/>
        </>
    );
}

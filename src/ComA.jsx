import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ComA = () => {


    //Counter Increment and decrement
    var [count, setCount] = useState(0);
    let check = 0
    let cssStyle = {}
    if (count <= 0) {
        count = 0
        cssStyle.color = 'red'
        console.log(check++)
    }
    else if (count > 10) {

        cssStyle.color = 'orange '
    } else {
        cssStyle.color = 'pink'
    }
    const increment = () => {
        count++;
        setCount(count);
    }
    const decrement = () => {
        count--;
        setCount(count)

    }
    let date = new Date().toLocaleTimeString();
    const [time, SetTime] = useState(date);
    const NewTime = () => {
        date = new Date().toLocaleTimeString();
        SetTime(date)
    }
    setInterval(NewTime, 1000)








    //API   CALLL
    const [num, numSet] = useState(1);
    const [name, nameSet] = useState();
    const [moves, moveSet] = useState();
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/1${num}`)
            console.log(res.data.name)
            nameSet(res.data.name);
            moveSet(res.data.moves.length)
            console.log(res.data.moves.length)

        }
        getData();
    })
    return (
        <>
            <h1>You Choose<span style={{ color: 'red' }}> {num}  </span> value</h1>
            <h1>My Name is  <span style={{ color: 'red' }}>{name}</span> </h1>
            <h1>I have <span style={{ color: 'red' }}> {moves} </span>Moves</h1>
            <select value={num} onChange={(event) => { numSet(event.target.value) }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='25'>25</option>
            </select>

            <h2>{time}</h2>
            <p>You clicked <span style={cssStyle}>{count}</span> times</p>
            <button onClick={increment}>
                increment
            </button>

            <button onClick={decrement}>
                decrement
            </button>
        </>
    )
}
export default ComA

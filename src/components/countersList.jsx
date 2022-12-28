import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initianState = [
    {id:0, value:0, name: 'Ненужная вещь'}, 
    {id:1, value:4, name: 'Ложка'}, 
    {id:2, value:0, name: 'Вилка'},
    {id:3, value:0, name: 'Тарелка'},
    {id:4, value:0, name: 'Набор минималиста'},
  ];
  const [counters, setCounters] = useState(initianState);

  const hendeleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const hendleReset = () => {
    setCounters(initianState)
  };

  const onIncrement = (id) => {
    setCounters(counters.map((count) => count.id === id ? {...count, value: count.value + 1} : count))
    
  };
  const onDecrement = (id)=> { 
    setCounters(counters.map((count) => count.id === id ? {...count, value: count.value - 1} : count))
    
  };
  
  return (
    <>
    {counters.map ((count) => (
       <Counter 
       key = {count.id}      
       oneDelete = {hendeleDelete}
       onIncrement = {onIncrement}
       onDecrement = {onDecrement}
       {...count}
       />     
    ))}  
    <button 
    className="btn btn-primary btn-sm m-2" 
    onClick = {hendleReset}
    >
    Сброс
    </button>     
    </>
  );
}

export default CountersList;

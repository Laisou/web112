'use client';
import {useState} from 'react';
import React, { Component } from 'react';

export default function MyButton1() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me1
      </button>
    );
  }

  export function MyButton2() {
    let count = 0;
    function handleClick() {
      count ++
      alert(count);
    }
  
    return (
      <button onClick={handleClick}>
        Click me2
      </button>
    );
  }

  export function MyButton3() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count +1);
        alert(count);
    }

    return (
        <button onClick={handleClick}>
        {count}
        </button>
        
    );
  }

  //// Returns a random integer from 0 to 10:
  //Math.floor(Math.random() * 11);

  // Spread operator, wrapper function (recommended)
  //setSearches(searches => [...searches, query])
  export function RandomNumbersArray(){

    const [nums, setNums] = useState<number[]>([]);

    
    function handleClick() {
        // Returns a random integer from 0 to 10:
        let num = Math.floor(Math.random() * 11);
        setNums(nums => [...nums, num])
    }

    return (
        <div>
            {nums.map(nums => nums + " ")}
            <button onClick={handleClick}>
                click me
            </button>
        </div>
    );
  }
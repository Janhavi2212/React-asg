import React from 'react'
import { memo } from 'react';
import { useEffect,useRef } from 'react';

const Child = ({count,setCount}) => {
    console.log("Child is rendered")
    let refV = useRef()
   useEffect(()=>{
        let interval;
        if(count>0){
            interval = setInterval(()=>{
                setCount(prev => prev-1)
            },1000)
        } else {
            clearInterval(interval)
        }
    return ()=>clearInterval(interval)
   },[count])

   function handleStart(){
    setCount(Number(refV.current.value))
   }

  return (
    <>
    <h3>Child</h3>
    <h4>Counter : {count}</h4>
    <input ref={refV}/>
    <button onClick={handleStart}>Start</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default memo(Child)
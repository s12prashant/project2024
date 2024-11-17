
import { useState } from 'react'

function Calculator() {
  const [count, setCount] = useState(0)
  const [firstNumber, setfirstNumber] =useState(0)
  const [secondNumber, setSecondNumber] =useState(0)
  const [symbol , setSymbol] = useState("+")
  const firstNumberHanadler = (event)=> {
    event.preventDefault()
    setfirstNumber(event.target.value)
  }
    const secondNumberHandler =(event)=>{
      event.preventDefault()
      setSecondNumber(event.target.value)
    }
    const add=()=>{
      setSymbol("+")
      const numOne = parseInt( firstNumber,10);
      const numTwo =parseInt( secondNumber,10);
      setCount(numOne+numTwo)
    }
    const sub = ()=>{
      setSymbol("-")
      const numOne = parseInt( firstNumber,10);
      const numTwo =parseInt( secondNumber,10);
      setCount(numOne-numTwo)
    }

  return (
   <>
   <div className='flex p-3 m-5  justify-center'>
    <h1 className=' pt-5'> firstNumber</h1>
    <input className='border h-[40px] w-[80px] m-4 p-3 font-mono'  value={firstNumber}  onChange={firstNumberHanadler}/>
   <h1 className=' pt-5 pr-4'>{symbol}</h1>
    <h1 className=' pt-5'> secondNumber</h1>
    <input className='border h-[40px] w-[80px] m-4 p-3 font-mono'  value={secondNumber} onChange={secondNumberHandler}/>
    <h1 className='pt-5 pl-4'>=</h1>
    <h1 className=' pt-5 pl-2'>Final result : {count} </h1>
   </div>
   <button className='border rounded-md bg-red-200 p-2 m-4 pt-2' onClick={add}>sum</button>
   <button className='border rounded-md bg-red-200 p-2 m-4 pt-2' onClick={sub}>sub</button>
  
  

   </> 
);
}

export default Calculator

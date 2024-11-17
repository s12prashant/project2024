import React, { useState } from 'react'

function Main() {
const [counter, setCounter] =useState({
     a:1,
     b:2,
     c:3,
   
     }
);
const [idCard, setidCard] =useState({
    name:"nishant",
    age:24
});

    const item=[
        {product: "apple",Price:70  },
    {product: "carrot", Price:50,  },
        {product: "banana",  Price: 90 },
        

    ];



   


    const increseCounter = ( event)=>{ 
        let x=event.target.name 
        if(x=="b1"){
            let newObject={
                a:counter.a+1,
                b:counter.b,
                c:counter.c
            }
            setCounter(newObject)
            
        } 
        else if ( x=="b2"){
            let newObject={
                a:counter.a,
                b:counter.b+1,
                c:counter.c
            }
            setCounter(newObject)
        } 
        else{
            let newObject={
                a:counter.a,
                b:counter.b,
                c:counter.c+1
            }
            setCounter(newObject)
        } 
       
    
    }
    const decCounter = (event)=>{ 
        let x=event.target.name

        if(x=="b4"){
        if(counter.a == 0){
            alert ("not less than zero")
        } 
        else{
            let newObject={
                a:counter.a-1,
                b:counter.b,
                c:counter.c
            }
            setCounter(newObject)}
        } 
        else if ( x=="b5"){
            if(counter.b == 0){
                alert ("not less than zero")
            }
            else{
            let newObject={
                a:counter.a,
                b:counter.b-1,
                c:counter.c
            }
            setCounter(newObject)}
        } 
        else{
            if(counter.c == 0){
                alert ("not less than zero")
            }
            else{
            let newObject={
                a:counter.a,
                b:counter.b,
                c:counter.c-1
            }
            setCounter(newObject)}
        }
    
    }
        

  return (
   <div className='overflow-x-auto'>
    <table className='bg-white border-gray-200'>
        <thead>
            <tr>
                <th className='px-4 py-2 border-b' >Product</th>
                <th className='px-4 py-2 border-b'>qty </th>
                <th className='px-4 py-2 border-b'>Price</th>
                <th className='px-4 py-2 border-b'>total</th>
            </tr>
        </thead>
       <tbody>
       <tr className='hover:bg-gray-100'>
                <td className='border p-5 ml-3 bg-blue-200'>{item[0].product}</td>
                <td className='border p-5 ml-3 bg-yellow-200'> 
                <button name='b1' className=' rounded-lg m-2 p-1  font-bold text-red-900  bg-red-100' onClick={increseCounter}>+</button>
                    
                    <div className='  m-4 p-2 text-lg'>{counter.a}</div>
                    <button name='b4' className=' rounded-lg m-2 p-1 font-bold text-red-900  bg-red-100' onClick={decCounter}  >-</button>
                    </td>

                <td className='border p-5 ml-3 bg-yellow-200'>{item[0].Price}</td>
                <td name='b1' className='border p-5 ml-3 bg-yellow-200'>{counter.a* item[0].Price}</td>
                </tr>
                <tr className='hover:bg-gray-100'>
                <td className='border p-5 ml-3 bg-blue-200'>{item[1].product}</td>
                <td className='border p-5 ml-3 bg-yellow-200'> 
                <button name='b2' className=' rounded-lg m-2 p-1  font-bold text-red-900  bg-red-100' onClick={increseCounter}>+</button>
                    
                    <div className='  m-4 p-2 text-lg'>{counter.b}</div>
                    <button  name='b5' className=' rounded-lg m-2 p-1 font-bold text-red-900  bg-red-100'  onClick={decCounter} >-</button>
                    </td>

                <td className='border p-5 ml-3 bg-yellow-200'>{item[1].Price}</td>
                <td className='border p-5 ml-3 bg-yellow-200'>{counter.b* item[1].Price}</td>
                </tr>
                <tr className='hover:bg-gray-100'>
                <td className='border p-5 ml-3 bg-blue-200'>{item[2].product}</td>
                <td className='border p-5 ml-3 bg-yellow-200'> 
                <button name='b3' className=' rounded-lg m-2 p-1  font-bold text-red-900  bg-red-100' onClick={increseCounter}>+</button>
                    
                    <div className='  m-4 p-2 text-lg'>{counter.c}</div>
                    <button name='b6' className=' rounded-lg m-2 p-1 font-bold text-red-900  bg-red-100' onClick={decCounter} >-</button>
                    </td>

                <td className='border p-5 ml-3 bg-yellow-200'>{item[2].Price}</td>
                <td className='border p-5 ml-3 bg-yellow-200'>{counter.c* item[2].Price}</td>
               
                </tr>
       </tbody>
    </table>

<div> total= {counter.b* item[1].Price + counter.a*item[0].Price + counter.c* item[2].Price}</div>
    
    
   </div>

  

   )
}

export default Main 
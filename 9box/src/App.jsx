
import './App.css'
import { useState } from 'react'

function App() {
const [newarr , setNewArr] = useState([]);


const [colors , setColors] = useState(Array(9).fill("yellow"))
// console.log(colors)


const changeColor = (index)=>{
   
 setNewArr((prev) => [...prev , index])
 console.log(newarr);
if(index !== 8){
  setColors((prevcolor) => {

    const updatedcolors = [...prevcolor];
    updatedcolors[index] = 'green';
    return updatedcolors;
  })
}
else if(index === 8){
newarr.push(8);


  setColors((prevcolor)=>{
    const updatedcolors = [...prevcolor];
    
    newarr.forEach((val)=>{
      updatedcolors[val] = 'blue';
    })
   
    return updatedcolors;
  })
  




  

  setNewArr([]);
  setTimeout(()=>{
    setColors(Array(9).fill('yellow'))
  }, 2000)
  console.log("empty arr" , newarr)
}
      
    }
    return (
    <><center className='center'>
      <div className="container">

      {colors.map((color , index)=>(
        <div
        key={index}
        style = {{backgroundColor : color}}
        className='box'
        onClick = {()=> changeColor(index)}
        ></div>
      ))}
   

      </div>
      </center>
    </>
  )
}

export default App

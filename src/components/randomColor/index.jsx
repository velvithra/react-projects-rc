import { useState,useEffect } from "react"
import './random.css'

export default function RandomColor(){
 
    const [typeofColor,setTypeofColor]=useState('hex');
    const [color,setColor]=useState('#000000');

    function randomcolorUse(length){
      return Math.floor(Math.random()*length)
    }

    function handlecreateRandomHexColor(){
//#000000
      const hex=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
      let hexColor="#";

      for( let i=0; i<6 ; i++){
              hexColor += hex[randomcolorUse(hex.length)];
      }
      setColor(hexColor);
    }
    

    function handlecreateRandomrgbColor(){
        const r= randomcolorUse(256);
        const g= randomcolorUse(256);
        const b= randomcolorUse(256);

        setColor(`rgb(${r},${g},${b})`)

    }
    useEffect(()=>{
      if(typeofColor === 'rgb') handlecreateRandomrgbColor();
      else handlecreateRandomHexColor();  
    }, [typeofColor]);

    return(
        <div style={{background:color}}className="container">
            <button onClick={()=> setTypeofColor('hex')}>Create HEX Color</button>
            <button onClick={()=> setTypeofColor('rgb')}>Create RGBA Color</button>
            <button onClick={typeofColor === 'hex' ? handlecreateRandomHexColor :
        handlecreateRandomrgbColor }>Generate random color</button>

        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:"white",
            fontSize:'30px',
            marginTop:'50px',
            flexDirection:'column',
        }}>
            <h1>{color}</h1>
            <h3>{typeofColor === 'rgb' ? ' RGB color' : 'HEX color'}</h3>

        </div>
        </div>
    )
}
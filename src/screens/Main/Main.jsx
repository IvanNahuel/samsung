import { useState, useEffect } from "react";
import { S21, S22, Zflip } from "../../components";

export const Main = () =>{
    const [opacity, setOpacity] = useState(0);

    useEffect(()=>{
      setTimeout(()=>{
        setOpacity(1);
      },100)
  
    },[])

    return  <div className='mobile-container h-[100vh] w-full bg-red-400' 
    style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', opacity: `${opacity}`}}>
      <S21/>
      <S22/>
      <Zflip/>
    </div>
}

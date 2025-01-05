import React, {useState} from "react";

function CD() {
    const [color,setColor] = useState("#0ff"); 
    const colors = ["#00f","#0f0","#0ff","#f00","#f0f","#ff0","#fff"];
    let index = 0;
    const changeColor = ()=>{
        index = Math.floor(Math.random()*colors.length)
        setColor(colors[index]);
    }
    return(
        <button style={{backgroundColor: color ,padding : "5px 10px"}} onClick={changeColor}>
            try Clicking me :
        </button>
    );
    
}

export default CD;
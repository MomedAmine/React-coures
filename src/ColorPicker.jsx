import React ,{useState} from "react";
function ColorPicker() {
    const [color, setColor] = useState("#000000")
    function changeColor(event) {
        setColor(event.target.value)
    }
    function negative(c){
        c = "0x"+c.slice(1,c.length);
        c = parseInt(c, 16);
        c = 0xffffff - c ;
        c = "#"+c.toString(16);
        return c;
    }
    return(
        <>
        <div style={{backgroundColor : color , borderColor :negative(color)}} className="coloredDiv">
            <p style={{color : negative(color)}}>{color} <br /> =!= <br />{negative(color)}</p>
        </div>
        <p>select a color</p>
        <input type="color" onChange={changeColor}/>
        </>
    );
}

export default ColorPicker;
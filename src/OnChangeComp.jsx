
import React, {useState} from "react";

function OnChangeComp() {
    const [text,setText] = useState("")
    function changes(event){
        setText(event.target.value)
    };

    return(
        <div>
            <form action="Submit">
                <input type="text" id="testText" onChange={changes}/><br />
                <br />
                <label> this is displayed on input change : <br/> {text}</label>
            </form>
        </div>
    );
}

export default OnChangeComp; 
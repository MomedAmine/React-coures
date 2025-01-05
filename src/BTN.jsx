
function BTN() {
    let count =0;
    const handle = (e) => {
        count ++;
        alert("you clicked me " + count + " times \nCheck console");
        console.log(e)
        //you can access event properties and chenge them try it  :)
    }
    
    return(
        // you can also use onDoubleClick :)
        <button onClick = {(e) => handle(e)} className="button" > Clike me !!</button>
    );
}

export default BTN
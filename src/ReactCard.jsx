function RC(props) {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
    setActive(!isActive);
  };
return(
    <div className="RC">
        <h2  onClick={toggleClass}>{props.RCName}</h2>
        <hr/>
        <div className ={isActive ? 'hideDiv': null}>
            {props.Rcomp}
        </div>
    </div>
)
};

export default RC

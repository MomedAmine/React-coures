function RC(props) {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
    setActive(!isActive);
  };
return(
    <div className="RC" onDoubleClick={toggleClass}>
        <h2>{props.RCName}</h2>
        <hr/>
        <div className ={isActive ? 'hideDiv': null}>
            {props.Rcomp}
        </div>
    </div>
)
};

export default RC

import "./Circles.css";

const Circles = (props) => {



    return (
        <button onClick={props.onClick} className={props.className} >{props.number}</button>
    )
}

export default Circles
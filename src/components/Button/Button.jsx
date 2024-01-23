import "./Button.css";

const Button = (props) => {

    return (
        <button onClick={props.onClick} className={props.className}>SUBMIT</button>
    )
}

export default Button
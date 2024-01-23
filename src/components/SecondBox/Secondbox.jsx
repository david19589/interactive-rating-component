import "./SecondBox.css";

const SecondBox = (props) => {
    return (
        <div className="insideBox2">
            <img className="terminal" src="src/assets/illustration-thank-you.svg" alt="terminal" />
            <h2 className="stars-selected">You selected {props.result} out of 5</h2>
            <h1 className="thankYou">Thank you!</h1>
            <p className="p2">We appreciate you taking the time 
            to give a rating. If you ever need more 
            support, don’t hesitate to get in touch!</p>
        </div>
    )
}

export default SecondBox
import "./Header.css";

const Header = () => {
    return (
        <div>
            <img className="star" src="src/assets/icon-star.svg" alt="star" />
            <h1 className="h1">How did we do?</h1>
            <p className="p">Please let us know how we did with
                your support request. All feedback is appreciated
                to help us improve our offering!</p>
        </div>
    )
}

export default Header
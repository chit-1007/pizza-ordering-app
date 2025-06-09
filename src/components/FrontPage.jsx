import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import "./FrontPage.css";

export default function FrontPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        setName(e.target.value);
        if (showError && e.target.value.trim() !== "") setShowError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "") {
            setShowError(true);
            return;
        }
        navigate("/menu", { state: { name } });
    };

    return (
        <div className="front-page">
            <header>
                <h1>FAST REACT PIZZA CO.</h1>
                <p>The best pizza. Straight out of the oven, straight to you.</p>
            </header>

            <form className="welcome-box" onSubmit={handleSubmit}>
                <p>Welcome! Please start by telling us your name:</p>
                <input
                    type="text"
                    placeholder="Your name"
                    className="name-input"
                    value={name}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="order-button"
                >
                    START ORDERING
                </button>
                {showError && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                        Please enter your name.
                    </div>
                )}
            </form>

            <Footer />
        </div>
    );
}
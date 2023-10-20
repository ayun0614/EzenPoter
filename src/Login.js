import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import React from "react";
import Recipe from "./img/recipe.png";
import Google from "./img/google.png";
import Apple from "./img/apple.png";
import Instagram from "./img/insta.png";

const Login = () => {
    const navigate = useNavigate();

    const navigateToStart = () => {
        navigate("/DomitoryTest");
    };

    return (
        <body>
            <section>
                <h1 className="login-head">Welcome to Hogwarts!</h1>
                <div className="login-div">
                    <img src={Recipe} className="login-recipe" alt="loginRecipe" />
                    <div className="login-btn" onClick={navigateToStart}>
                        <img src={Google} className="login-icon" alt="google" />
                        <h3>sign in with google</h3>
                    </div>
                    <div className="login-btn" onClick={navigateToStart}>
                        <img src={Apple} className="login-icon" alt="apple" />
                        <h3>sign in with apple</h3>
                    </div>
                    <div className="login-btn" onClick={navigateToStart}>   
                        <img src={Instagram} className="login-icon" alt="instagram" />
                        <h3>sign in with instagram</h3>
                    </div>
                </div>
            </section>
        </body>
    );
};

export default Login;

import React, { useState } from "react";

const withLoginExercise = (Component) => (props) => {
    const [isAuth, setAuth] = useState(Boolean(localStorage.getItem("user")));
    console.log(isAuth);

    const handleLogin = () => {
        localStorage.setItem("user", "true");
        setAuth(!isAuth);
    };
    const handleLogOut = () => {
        localStorage.removeItem("user");
        setAuth(!isAuth);
    };

    return (
        <Component
            {...props}
            isAuth={isAuth}
            onLogin={handleLogin}
            onLogOut={handleLogOut}
        />
    );
};

export default withLoginExercise;

import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogOut, onLogin }) => {
    return isAuth ? (
        <div>
            <h3>Вы в системе</h3>
            <button className="btn btn-primary" onClick={onLogOut}>
                Выйти из системы
            </button>
        </div>
    ) : (
        <div>
            <h3>Вы не вошли</h3>
            <button className="btn btn-primary" onClick={onLogin}>
                Войти
            </button>
        </div>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};
export default SimpleComponent;

import React from "react";
import PropTypes from "prop-types";
import "./User.scss";

const UserHeader = ({ firstName }) => {
    return (
        <div className="headerContainer">
            <h1 className="userGreetings">
                Bonjour <span className="userName">{firstName}</span>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    );
};
UserHeader.propTypes = {
    firstName: PropTypes.string.isRequired
};

export default UserHeader;

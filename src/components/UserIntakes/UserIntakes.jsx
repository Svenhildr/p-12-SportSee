import React from "react";
import PropTypes from "prop-types";
import ImgCals from "../../assets/calories.png";
import ImgProt from "../../assets/protein.png";
import ImgFat from "../../assets/fat.png";
import ImgCarbs from "../../assets/carbs.png";
import "./UserIntakes.scss";

const UserIntakes = ({ data }) => {
    if (!data || !data.keyData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="caloriesContainer">
                <img src={ImgCals} />
                <div className="intakeText">
                    <p> {data.keyData.calorieCount} KCal</p>
                    <span>Calories</span>
                </div>
            </div>
            <div className="proteinsContainer">
                <img src={ImgProt} />
                <div className="intakeText">
                    <p> {data.keyData.proteinCount} g</p>
                    <span>Proteines</span>
                </div>
            </div>
            <div className="carbsContainer">
                <img src={ImgFat} />
                <div className="intakeText">
                    <p> {data.keyData.carbohydrateCount} g</p>
                    <span>Glucides</span>
                </div>
            </div>
            <div className="fatContainer">
                <img src={ImgCarbs} />
                <div className="intakeText">
                    <p> {data.keyData.lipidCount} g</p>
                    <span>Lipides</span>
                </div>
            </div>
        </>
    );
};
UserIntakes.propTypes = {
    data: PropTypes.shape({
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number.isRequired,
            proteinCount: PropTypes.number.isRequired,
            carbohydrateCount: PropTypes.number.isRequired,
            lipidCount: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};
export default UserIntakes;

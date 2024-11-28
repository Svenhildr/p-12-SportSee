import "./Sidenav.scss";
import ImgYoga from "../../assets/yoga.png";
import ImgBike from "../../assets/bike.png";
import ImgSwim from "../../assets/swim.png";
import ImgGym from "../../assets/gym.png";

export default function Sidebar() {
    return (
        <div className="SidebarContainer">
            <div className="logoGroup">
                <p className=" sideLogo">
                    <img src={ImgYoga} />
                </p>
                <p className=" sideLogo">
                    <img src={ImgSwim} />
                </p>
                <p className=" sideLogo">
                    <img src={ImgBike} />
                </p>
                <p className=" sideLogo">
                    <img src={ImgGym} />
                </p>
            </div>
            <p className="copyright">Copiryght, SportSee 2020</p>
        </div>
    );
}

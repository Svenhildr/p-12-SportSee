import { Link } from "react-router-dom";
import "./Sidenav.scss";
import ImgYoga from "../../assets/yoga.png";
import ImgBike from "../../assets/bike.png";
import ImgSwim from "../../assets/swim.png";
import ImgGym from "../../assets/gym.png";

export default function Sidebar() {
    return (
        <div className="SidebarContainer">
            <div className="logoGroup">
                <Link to={"#"} className=" sideLogo">
                    <img src={ImgYoga} />
                </Link>
                <Link to={"#"} className=" sideLogo">
                    <img src={ImgSwim} />
                </Link>
                <Link to={"#"} className=" sideLogo">
                    <img src={ImgBike} />
                </Link>
                <Link to={"#"} className=" sideLogo">
                    <img src={ImgGym} />
                </Link>
            </div>
            <div className="copyrightContainer">
                <p className="copyright">Copiryght, SportSee 2020</p>
            </div>
        </div>
    );
}

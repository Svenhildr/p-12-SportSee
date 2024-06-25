import { Link } from "react-router-dom";
import "./Header.scss";
import LogoSportsee from "../../assets/SportSee.png";

export default function Header() {
    return (
        <header className="header">
            <img src={LogoSportsee} />

            <nav className="headerNav">
                <Link to={"/"} className=" link">
                    Accueil
                </Link>

                <Link to={"/"} className=" link">
                    Profile
                </Link>

                <Link to={"/"} className=" link">
                    Réglage
                </Link>

                <Link to={"/"} className=" link">
                    Communauté
                </Link>
            </nav>
        </header>
    );
}

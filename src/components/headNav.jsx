import { Link } from 'react-router-dom';
import Navigation from "./navMenu";
import loadingLogo from "./card resources/logo.png"



export default function HeadNav() {

    return (
        <div className="head-container">
            <Link to="/" className="title">
                <img src={loadingLogo} alt="Logo" />
            </Link>
            <Navigation />
        </ div>

    )
}
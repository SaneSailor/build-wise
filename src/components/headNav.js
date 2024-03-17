import { Link } from 'react-router-dom';
import Navigation from "./navMenu";



export default function HeadNav() {

    return (
        <div className="head-container">
            <Link to="/" className="title">
                <h1>Build Wise header</h1>
            </Link>
            <Navigation />
        </ div>

    )
}
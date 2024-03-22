import { NavLink } from 'react-router-dom';


export default function Navigation() {
    
    return (
        <nav>
            <div className='menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='navigation'>
                    <ul>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/clients">Clients</NavLink>
                        </li>
                        <li>
                            <NavLink to="/proposals">Proposals</NavLink>
                        </li>
                        <li>
                            <NavLink to="/invoices">Invoices</NavLink>
                        </li>
                    </ul>
            </div>
        </nav>
    
    )
}
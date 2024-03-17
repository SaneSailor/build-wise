import { NavLink } from 'react-router-dom';


export default function Dashboard() {
    return (
        <>
        <h2>Dashboard</h2>
        <div className='dashboard'>
            <div className='DashList'>
                <li><NavLink to="/clients">Clients</NavLink></li>
                <li><NavLink to="/proposals">Proposals</NavLink></li>
                <li><NavLink to="/invoices">Invoices</NavLink></li>
            </div>
        </div>
        </>
    )
}
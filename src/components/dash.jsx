import { ClientCard, ProposalCard, InvoiceCard } from './card';
import { NavLink } from 'react-router-dom';

export default function Dash() {
    return (
        <>
        <h2>Dashboard</h2>
        <div className='dashboard'>
            <div className='DashList'>
                <span className='dash'>
                    <li>
                    <NavLink to="/clients"><ClientCard /></NavLink>
                    </li>    
                </span>
                <span className='dash'>
                    <li>
                    <NavLink to="/proposals"><ProposalCard /></NavLink>
                    </li>
                </span>
                <span className='dash'>
                    <li>
                    <NavLink to="/invoices"><InvoiceCard /></NavLink>
                    </li>
                </span>
            </div>
        </div>
        </>
    )
}
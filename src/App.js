import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Client from './pages/client';
import Proposal from "./pages/proposal";
import Invoice from "./pages/invoice";
import NoPage from "./pages/nopage";
import "./App.css";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Landing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/clients' element={<Client />} />
          <Route path='/proposals' element={<Proposal />} />
          <Route path='/invoices' element={<Invoice />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

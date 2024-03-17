import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage';
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
          <Route index element = {<Home />} />
          <Route path='/home' element={<Home />} />
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


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen.jsx';
import NoticeBoard from './components/NoticeBoard.jsx';

import KeralaDirectory from './components/KeralaDirectory';
import UserDetails from './components/UserDetails';
import ManagingCommittee from './components/ManagingCommittee';
import Wards from './components/Wards';
import UserList from './components/UserList';

function App() {
  return (
    <BrowserRouter>
    
    
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/NoticeBoard" element={<NoticeBoard/>} />
        <Route path="/keraladirectory" element={<KeralaDirectory/>} />
        <Route path="/userdetails/:id" element={<UserDetails/>} />
        <Route path="/managingcomittee" element={<ManagingCommittee/>} />
        <Route path="/wards" element={<Wards/>} />
        <Route path="/userslist/:area" element={<UserList/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen.jsx';
import NoticeBoard from './components/NoticeBoard.jsx';

import KeralaDirectory from './components/KeralaDirectory';
import UserDetails from './components/UserDetails';
import ManagingCommittee from './components/ManagingCommittee';
import Wards from './components/Wards';
import UserList from './components/UserList';

import { MyContext } from './ContextAPI';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState([])
  const [comitteeData, setComitteeData] = useState([])


  
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://sheetdb.io/api/v1/d1jcvp2yjtm67')
        .then(res => res.json())
        .then(data => setData(data))
  
    }
    const fetchComitteeData = async () => {
      await fetch('https://sheetdb.io/api/v1/c2id24dx91yp0')
        .then(res => res.json())
        .then(data => setComitteeData(data))
  
    }
    fetchComitteeData();
    // fetchData();

  }, [])




  return (
    <BrowserRouter>


      <MyContext.Provider value={{ data,comitteeData }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/NoticeBoard" element={<NoticeBoard />} />
          {/* <Route path="/keraladirectory" element={<KeralaDirectory/>} /> */}
          <Route path="/userdetails/:id" element={<UserDetails />} />
          <Route path="/managingcomittee" element={<ManagingCommittee/>} />
          <Route path="/wards" element={<Wards />} />
          <Route path="/userslist/:area" element={<UserList />} />



        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

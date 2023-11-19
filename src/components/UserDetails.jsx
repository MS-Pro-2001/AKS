import { Avatar, Button, IconButton, ListItem, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import SearchAppBar from './SearchAppBar'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { MyContext } from '../ContextAPI'

import logo from "../sanju_bhaiya_fam.jpeg"



import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';


import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';


const UserDetails = () => {
  const { id } = useParams()

  const { data } = useContext(MyContext)
  // console.log(data)


  // const [user, setUser] = useState([]);
  // const [filteredUser, setFilteredUser] = useState([]);

  const [isLoading, setisLoading] = useState(false);


  const newval = data.filter((item) => {

    return item.ID === id;
  })










  // const fetchData = async ()=>{
  //     await fetch('https://sheetdb.io/api/v1/d1jcvp2yjtm67')
  //     .then(res => res.json())
  //     .then(data =>setUser(data))

  //     setisLoading(false);


  // }





  // useEffect(() => {
  //     fetchData();    
  // },[])








  return (
    <>
      <SearchAppBar flag="True" pageName="User Details" />




      {/* Family Section */}


      <div style={{ margin: '20px 20px' }}>

        <div className="row my-2 d-flex justify-content-center" >
          {/* <div className="col-4"></div> */}
          <div className="col d-flex justify-content-center"  >

            {/* <div className=" my-4">

            <div className=" top-0 start-50 translate-middle "> */}

            <img style={{ borderRadius: "20px" }} src={`https://drive.google.com/uc?export=view&id=${newval[0].Family_Photo.replace("https://drive.google.com/open?id=", "")}`} alt="" width={280} height={300} />

            {/* <Avatar
                    alt="Remy Sharp"
                    src = {`https://drive.google.com/uc?export=view&id=${newval[0].Family_Photo.replace("https://drive.google.com/open?id=","")}`}
                    // src="https://drive.google.com/file/d/1oyLUEfp2RFXqjSabNHk8WhE2y5EzMwWf/view"
                    // sx={{ width: 90, height: 80 }}
                    style={{width:"100px",height:"90px",boxShadow:'1px 1px 3px 1px grey'}}
                /> */}

            {/* </div>
        </div> */}

          </div>
          {/* <div className="col-4"></div> */}


        </div>



        <List

          sx={{ width: '100%', boxShadow: '1px 1px 1px 1px  lightgrey', borderRadius: '20px' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader style={{ background: '#1976d2', borderRadius: '20px 20px 0px 0px', color: 'white' }} component="div" id="nested-list-subheader">
              Primary Details
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={newval[0]?.Name_of_member} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary={newval[0]?.Mobile_number} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary={newval[0]?.Address} />
          </ListItemButton>

        </List>

      </div>


      <div style={{ margin: '20px 20px' }}>





        <List

          sx={{ width: '100%', boxShadow: '1px 1px 1px 1px  lightgrey', borderRadius: '20px' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader style={{ background: '#1976d2', borderRadius: '20px 20px 0px 0px', color: 'white' }} component="div" id="nested-list-subheader">
              Family Details
            </ListSubheader>
          }
        >
          <ListItemButton>

            <ListItemText primary={newval[0]?.Name_of_member_1} secondary={newval[0].Relationship} />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText primary={newval[0]?.Date_of_birth_member_1} />


          </ListItemButton>

          <ListItemButton>



            <ListItemText primary={newval[0]?.Name_of_member_2} secondary={newval[0].Relationship_with_member_2} />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText primary={newval[0]?.Date_of_birth_member_2} />




          </ListItemButton>



          <ListItemButton>

            <ListItemText primary={newval[0]?.Name_of_member_3} secondary={newval[0].Relationship_with_member_3} />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText primary={newval[0]?.Date_of_birth_member_3} />
          </ListItemButton>

          <ListItemButton>

            <ListItemText primary={newval[0]?.Name_of_member_4} secondary={newval[0].Relationship_with_member_4} />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText />
            <ListItemText primary={newval[0]?.Date_of_birth_member_4} />
          </ListItemButton>

        </List>

      </div>





    </>







  )
}

export default UserDetails

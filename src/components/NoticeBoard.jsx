import { Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'


import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import SearchAppBar from './SearchAppBar';
import { useNavigate } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NoticeBoard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState("")


  // Apply await async here

  const fetchData = async () => {
    await fetch('https://dummyjson.com/users/')
      .then(res => res.json())
      .then(data => setData(data.users))

    setisLoading(false)


  }


  useEffect(() => {
    setTimeout(() => {
      
      fetchData();
    }, 1500);


  }, [])


 
  const searchfunctionality = async (e)=>{
    console.log(e)
    setQuery(e)
    await fetch(`https://dummyjson.com/users/search?q=${query}`)
    .then(res => res.json())
    .then(data => setData(data.users))

  setisLoading(false)

  }



  return (
    <>
      <SearchAppBar flag="True" pageName="Notice Board" />
      


      <div className="container my-4">
      
        <div className="row ">
          <div className="col mx-3 border border-3 border-primary rounded-pill">

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={(e)=>searchfunctionality(e.target.value)}
                value={query}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            
          </div>

        </div>
       
        <div className="row">
       
          <div className="col ">


          <Typography style={{margin:'20px 0 0 20px',color:'grey',fontSize:"20px"}} >showing total {data.length} results</Typography>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

            
                  <List>

                    {isLoading ?<>
                      {
                      ['1','2','3','4','5','6','7','8'].map(()=>
                      <>
                      <ListItem
                
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                 <ArrowForwardIosIcon/>
                  </IconButton>
                }
 
                disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemAvatar>
                      {/* <Avatar alt="Remy Sharp" src={<Skeleton variant="circular" width={40} height={40} />} /> */}
                      <Skeleton variant="circular" width={40} height={40} />
                    </ListItemAvatar>
                   
                  </ListItemIcon>
                  
                  <ListItemText  primary={<Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} />}  secondary={<Skeleton variant="text" width={100} />}  />
                 
     
                
 
                </ListItemButton>
              </ListItem>
                
              <Divider/>
               
                      </>
                      
                      )
                    }
                    
                    
                    
                    </>:
                    <>
                    {

                      data?.map((item) =>

                        <>
                          <ListItem
                            key={item}
                            secondaryAction={
                              <IconButton edge="end" aria-label="delete">
                                <ArrowForwardIosIcon/>
                              </IconButton>
                            }

                            disablePadding >
                            <ListItemButton>
                              <ListItemIcon>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={item.image} />
                                </ListItemAvatar>

                              </ListItemIcon>

                              <ListItemText primary={isLoading ? <><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></> : item.firstName} secondary={item?.company?.department}  />




                            </ListItemButton>
                          </ListItem>

                          <Divider />

                        </>
                      )
                    }
                    </>
                  }


                  </List>

              
              




            </List>





          </div>
        </div>
      </div>

    </>
  )
}

export default NoticeBoard
import { Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Skeleton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CallIcon from '@mui/icons-material/Call';

import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import SearchAppBar from './SearchAppBar';
import { useNavigate, useParams } from 'react-router-dom';

import { WardsData } from './Data';
import { MyContext } from '../ContextAPI';

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

const UserList = () => {
  const navigate = useNavigate();

  const { area } = useParams();
  const { data } = useContext(MyContext)


  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState("")


  setTimeout(() => {
    setisLoading(false)
  }, 2500);


  const filteredData = data.filter((item) => {
    return item.Ward === area
  })



  // const searchfunctionality = async (e) => {
  //   setQuery(e)
  //   await fetch(`https://dummyjson.com/users/search?q=${query}`)
  //     .then(res => res.json())
  //     .then(data => setUsers(data))

  //   setisLoading(false)

  // }
  // var index;

  // Object.keys(WardsData[0]?.area).map((item, key) => {
  //   if (item === area) {
  //     index = key;

  //   }
  // })


console.log(data);



  return (
    <>
      <SearchAppBar flag="True" pageName="AKS Directory" />


      <div className="container my-4">

        {/* ################  SearchBar ####################### */}

        <div className="row ">
          <div className="col mx-3 border border-3 border-primary rounded-pill">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                // onChange={(e) => searchfunctionality(e.target.value)}
                // value={query}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
        </div>






        <div className="row">
          <div className="col ">
            <Typography style={{ margin: '20px 0 0 20px', color: 'grey', fontSize: "20px" }} >showing total {filteredData.length}  results</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <List>

                {filteredData.length === 0 ?
                  <>
                    <h1>No member listed</h1>

                  </> :
                  <>




                    {isLoading ? <>
                      {
                        filteredData?.map(() =>
                          <>
                            <ListItem

                              secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                  <CallIcon color="primary" />
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

                                <ListItemText primary={<Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} />} secondary={<Skeleton variant="text" width={100} />} />




                              </ListItemButton>
                            </ListItem>

                            <Divider />

                          </>

                        )
                      }



                    </> :
                      <>
                        {

                          filteredData?.map((item) =>

                            <>

                              <ListItem
                                key={item?.ID}
                                secondaryAction={
                                  <a href={"tel:" + item?.Mobile_number}>
                                    <CallIcon color="primary" />
                                  </a>
                                }

                                disablePadding >
                                <ListItemButton>
                                  <ListItemIcon>
                                    <ListItemAvatar>
                                      <Avatar alt="Remy Sharp" src={`https://drive.google.com/uc?export=view&id=${item.Family_Photo.replace("https://drive.google.com/open?id=","")}`}
                                      style={{boxShadow:'1px 1px 3px 1px grey'}} />
                                    </ListItemAvatar>

                                  </ListItemIcon>

                                  <ListItemText primary={isLoading ? <><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></> : item.Name_of_member} secondary={""} onClick={() => navigate(`/Userdetails/${item.ID}`)} />
                                </ListItemButton>
                              </ListItem>

                              <Divider />

                            </>
                          )
                        }
                      </>
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

export default UserList

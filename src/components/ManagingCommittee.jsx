import { Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Skeleton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CallIcon from '@mui/icons-material/Call';

import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import SearchAppBar from './SearchAppBar';
import { useNavigate } from 'react-router-dom';
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

const ManagingCommittee = () => {
  const navigate = useNavigate();
  const { comitteeData } = useContext(MyContext)

  const [data, setData] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [Arr, setArr] = useState(comitteeData)


  // Apply await async here

  // const fetchData = async () => {
  //   await fetch('https://dummyjson.com/users/')
  //     .then(res => res.json())
  //     .then(data => setData(data.users))

  //   setisLoading(false)


  // }


  // useEffect(() => {
  //   setTimeout(() => {

  //     fetchData();
  //   }, 1500);


  // }, [])
  // const searchfunctionality = async (e)=>{
  //   console.log(e)
  //   setQuery(e)
  //   await fetch(`https://dummyjson.com/users/search?q=${query}`)
  //   .then(res => res.json())
  //   .then(data => setData(data.users))

  // setisLoading(false)

  // }





  const filterBySearch = (e) => {

    setQuery(e);

    var updatedList = [...comitteeData];

    updatedList = comitteeData.filter((item) => {
     
      return item.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setArr(updatedList);
    // Edege case
    if (query.length === 0 || query.length === 1) {

      setArr(comitteeData);
    }


  };


  setTimeout(() => {
    setisLoading(false)
  }, 2000);



  return (
    <>
      <SearchAppBar flag="True" pageName="ManagingComittee" />


      <div className="container my-4">
        <div className="row ">
          <div className="col mx-3 border border-3 border-primary rounded-pill">

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={(e) => filterBySearch(e.target.value)}
                value={query}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>

        </div>
        <div className="row">
          <div className="col ">



            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Typography style={{ margin: '20px 0 0 20px', color: 'grey', fontSize: "20px" }} >showing total {Arr.length} results</Typography>



              <List>

                {isLoading ? <>
                  {
                    Arr.map((key) =>
                      <>
                        <ListItem

                          secondaryAction={

                            <CallIcon color="primary" />



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

                      Arr?.map((item) =>

                        <>
                          <ListItem
                            key={item}
                            secondaryAction={
                              <IconButton edge="end" aria-label="delete">
                                <a href={"tel:" + item.Contact_number}>
                                  <CallIcon color="primary" />
                                </a>
                              </IconButton>
                            }

                            disablePadding >
                            <ListItemButton>
                              <ListItemIcon>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={item.image} />
                                </ListItemAvatar>

                              </ListItemIcon>

                              <ListItemText primary={isLoading ? <><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></> : item.Name} secondary={item?.Designation} />




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

export default ManagingCommittee
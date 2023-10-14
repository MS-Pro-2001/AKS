import { Divider, IconButton, List, ListItem,  ListItemButton,  ListItemText,  Typography } from '@mui/material'
import React, {  useState } from 'react'

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

const Wards = () => {

  const wards = [
    "Bopal",
    "Bapunagar",
    "Ghatlodia",
    "Krishnanagar",
    "Maninagar",
    "Naroda",
    "Nirnaynagar",
    "Noblenagar",
    "Odhav",
    "Sabarmati",
    "Thaltej",
    "Vastrapur",
    "Vejalpur",
  ]

  const navigate = useNavigate();

 
  const [query, setQuery] = useState("")

  const [arr,setArr] = useState(wards);



  
  
  const filterBySearch = (e) => {
    // Access input value
     setQuery(e);
    // Create copy of item list
    var updatedList = [...wards];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      // console.log( item.toLowerCase().indexOf(query.toLowerCase()));
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setArr(updatedList);
    if(query.length === 0 || query.length === 1){
      updatedList = [...wards];
      setArr(updatedList);
    }
  };



  return (
    <>
      <SearchAppBar flag="True" pageName="AKS WARDS" />
      


      <div className="container my-4">
      
        <div className="row ">
          <div className="col mx-3 border border-3 border-primary rounded-pill">

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={(e)=>filterBySearch(e.target.value)}
                value={query}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            
          </div>

        </div>
       
        <div className="row">
       
          <div className="col ">


          <Typography style={{margin:'10px 0 0 20px',color:'grey',fontSize:"15px"}} >showing total {arr.length} results</Typography>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

            
                  <List>
        <h3 className='mx-auto' >Please Select the ward</h3>

                    
                    <>
                    {

                      arr?.map((item,key) =>

                        <>
                          <ListItem
                          onClick={()=>navigate(`/userslist/${item}`)}
                            key={key}
                            secondaryAction={
                              <IconButton edge="end" aria-label="delete">
                                <ArrowForwardIosIcon/>
                              </IconButton>
                            }

                            disablePadding >
                            <ListItemButton>
                            

                              <ListItemText primary={item}   />




                            </ListItemButton>
                          </ListItem>

                          <Divider />

                        </>
                      )
                    }
                    </>
                  

                  </List>

            </List>
          </div>
        </div>
      </div>

    </>
  )
}

export default Wards
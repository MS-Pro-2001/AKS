import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { List, ListItemText } from '@mui/material';

import logo from "../../src/aks_logo.jpeg"




export default function SearchAppBar(props) {

  const strings = "ahmedabad kerala smajam";
 const Heading =  strings.toUpperCase();
 
  const navigate = useNavigate();
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
           
          >
            { props.flag=== "True" ?
              <>
                <ArrowBackIcon fontSize='large'  className="hoverme" onClick={()=>navigate(-1)}/>
              </>
            
            :<>
            <Typography>
            <img  style={{borderRadius:"50%"}}   width={50} src={logo} alt="aks_logo" />
            </Typography>
            </>
            
            }
            
            
         
          </Typography>
         
          <List>
            

             
          
            
      
         
          
              <ListItemText  sx={{ textAlign: 'center',marginLeft:'10px' }} primary={props.pageName || Heading} />
         
        
          </List>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

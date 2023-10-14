
import { Button, Card, Chip, Container } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';

import SearchAppBar from './SearchAppBar';


import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
    const navigate = useNavigate();

 
   

    const card = (
      <React.Fragment>
        <CardContent >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {currentDate.toDateString()}
          </Typography>
          <Typography variant="h5" component="div">
          Ahmedabad Kerala Samajam
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Chip label="Updates" color="secondary" />
          </Typography>
        </CardContent>
      </React.Fragment>
    );


    
  return (
    <>
    <SearchAppBar flag="False" />
   

<Container maxWidth="sm" >
  <Typography className='my-3'>Welcome!!</Typography>
  
<Card variant="outlined">{card}</Card>

   
        <Box className="my-4" sx={{ width: '70%',margin:'auto' }}>
      <Stack spacing={5}>
        <Button variant='contained'  onClick={()=> navigate("/NoticeBoard")}  >Notice Board</Button>
        <Button variant='contained'  onClick={()=> navigate("/wards")}>AKS Directory</Button>
        <Button variant='contained'  onClick={()=> navigate("/wards")}>AKS Comittee</Button>
      </Stack>
    </Box>

</Container>


  

    </>

  )
}

export default HomeScreen
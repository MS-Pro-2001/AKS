import { Avatar, Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import SearchAppBar from './SearchAppBar'
import { useParams } from 'react-router-dom'
import { useState } from 'react'



const UserDetails = () => {
    const {id} = useParams()

    const [user, setUser] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const fetchData = async ()=>{
        await fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))

        setisLoading(false);
      

    }


    useEffect(() => {
        fetchData();
        
      
      },[])

      console.log(user.firstName);
      
      

    return (
        <>
        <SearchAppBar  flag="True" pageName="User Details"  />
        {
            isLoading? <></>:<>

<div style={{ margin: '0 10px 0 10px' }}>

<div className="container my-4 " >
    <div className="row my-4" >
        <div class="position-relative my-4">

            <div class="position-absolute top-0 start-50 translate-middle">
                <Avatar
                    alt="Remy Sharp"
                    src={user?.image}
                    sx={{ width: 70, height: 70 }}
                />

            </div>
        </div>


    </div>
    <div className="row my-2 ">

        <TextField id="outlined-basic" label="Name" value={user?.firstName} variant="outlined" />
    </div>



    <div className="row my-2">

        <TextField id="outlined-basic" label="Mobile" value={user?.phone} variant="outlined" />
    </div>





    <div className="row my-2">
        <TextField id="outlined-basic" label="email" value={user.email} variant="outlined" />

    </div>
    <div className="row my-2">

        <TextField
            id="standard-multiline-flexible"
            label="Address"
            multiline
            maxRows={4}
            variant="standard"
            value={user?.address?.address}
        />

    </div>
    <div className="row my-2">
        <Button variant='contained' >Set Google map</Button>
    </div>


</div>
</div>
            
            
            
            
            
            </>
        }
       




                        </>
    )
}

export default UserDetails
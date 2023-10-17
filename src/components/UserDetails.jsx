import { Avatar, Button, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import SearchAppBar from './SearchAppBar'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { MyContext } from '../ContextAPI'

const UserDetails = () => {
    const {id} = useParams()
    
    const {data} = useContext(MyContext)
    // console.log(data)

    
    // const [user, setUser] = useState([]);
    // const [filteredUser, setFilteredUser] = useState([]);

    const [isLoading, setisLoading] = useState(false);

    
        const newval = data.filter((item)=>{

            return item.UserId === id;
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
                    src={newval?.image}
                    sx={{ width: 70, height: 70 }}
                    />

            </div>
        </div>


    </div>
    <div className="row my-2 ">

        <TextField id="outlined-basic" label="Name" value={newval[0]?.Name_of_member} variant="outlined" />
    </div>



    <div className="row my-2">

        <TextField id="outlined-basic" label="Mobile" value={newval[0]?.Mobile_number} variant="outlined" />
    </div>





    <div className="row my-2">
        <TextField id="outlined-basic" label="Ward" value={newval[0]?.Ward} variant="outlined" />

    </div>
    <div className="row my-2">

        <TextField
            id="standard-multiline-flexible"
            label="Address"
            multiline
            maxRows={4}
            variant="standard"
            value={newval[0]?.Address}
        />

    </div>
    <div className="row my-2">
        <Button variant='contained' >Set Google map</Button>
    </div>








</div>
</div>
            
    {/* Family Section */}


    <div style={{ margin: '0 10px 0 10px' }}>

        <div style={{display:'flex',justifyContent:'center'}}>
            <h1>Family Details</h1>
        </div>
 



<div className="container my-4 " >

    <div className="row my-4" >
        <div class="position-relative my-4">

            <div class="position-absolute top-0 start-50 translate-middle">
                <Avatar
                    alt="Remy Sharp"
                    src={newval?.image}
                    sx={{ width: 70, height: 70 }}
                />

            </div>
        </div>


    </div>
    <div className="row my-2 ">

        <TextField id="outlined-basic" label="Name" value={newval[0]?.Name_of_member_2} variant="outlined" />
    </div>



    <div className="row my-2">

        <TextField id="outlined-basic" label="Relationship" value={newval[0]?.Relationship_with_member_2
} variant="outlined" />
    </div>





    <div className="row my-2">
    <TextField id="outlined-basic" label="Date of Birth" value={newval[0]?.Date_of_birth_member_2
} variant="outlined" />
    

    </div>


  
   




</div>
</div>
            
            
            
            
            </>
        }
       




                        </>
    )
}

export default UserDetails
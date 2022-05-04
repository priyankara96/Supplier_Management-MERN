import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from 'react-router-dom';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const NavBar = () => {
    const [value, setValue] =useState(  ); 
  return (
    <div>
        <AppBar sx={{backgroundColor:"#ffff", width:"auto", ml:"auto"}} position='sticky'>

          <Toolbar>
            <div class="text-secondary">
                <LibraryBooksOutlinedIcon />
            </div> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="nav-link" aria-current="page" href="/"><div class="text-secondary">Home</div></a>
            <a className="nav-link" aria-current="page" href="/"><div class="text-secondary">Supplier Registration</div></a>
            <a className="nav-link" aria-current="page" href="/Payment_Details"><div class="text-secondary">Payment Details</div></a>
            <a className="nav-link" aria-current="page" href="/Supplier_Payment_Details"><div class="text-secondary">Supplier Payment</div></a>
            <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/Profile"><img style={{height: 50, width: 50}} class="rounded-circle" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" href="#"></img></a></div>
              <Tab LinkComponent={NavLink} to="/" label='Sign Out'/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar
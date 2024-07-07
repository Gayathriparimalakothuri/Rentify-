import React, { useState } from "react";
import 
{
    Card,
    Box,
    Container,
    FormControl,
    TextField, 
} from '@mui/material';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useNavigate } from 'react-router-dom';

import "./Login.css";


const Login = ()=>{
    const navigate = useNavigate();
    const [value,setValue] = useState(0);

    const [formData,setFormData] = useState({
        email:'',
        password:''
    })


    const handleTabChange = (e,newValue) =>{
        setValue(newValue);
    }
    return(

        <Container className="login-page mx-0" maxWidth="xl">
             <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                bgcolor="transparent"
                width="80%"
                borderRadius="15px"
                className="m-5"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="white"
                    width="60%"
                    height="40px"
                    borderRadius="15px"
                >
                    <p className="login-header">RENTIFY</p>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="white"
                    width="100vh"
                    mt={2}
                >
<Box width="100vh" borderRadius="15px">
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="Login"
          wrapped
        />
        <Tab value="two" label="SignUp" />
      </Tabs>
    </Box>
                </Box>
            </Box>
           
        </Container>
      
    )
}

export default Login
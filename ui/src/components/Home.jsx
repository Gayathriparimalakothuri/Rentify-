import React from "react";
import {Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate()
    return(
        <div className="main-container justify-content-center align-items-center ">
            <Card className="wh-100">
                <Button onClick={()=> navigate('./seller')}>Seller</Button>
                <Button onClick={()=> navigate('./buyer')}>Buyer</Button>
            </Card>
        </div>
    )
}
export default Home
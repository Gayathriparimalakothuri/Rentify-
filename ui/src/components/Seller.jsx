import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../images/vasanthavalley2bhk.jpg';
import { Tooltip } from '@mui/material';

export default function Seller() {
  const [clicked,setClicked]=useState(false);
  const [count,setCount] = useState(0);
  const handleClick = ()=>{
    setCount((prev)=> prev+1);
    //console.log('count',count);
    if(count %2 ===0){
      setClicked(false)
    }else{
      setClicked(true)
    }
  }
  return (
    <div className='mx-5 my-5'>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
        alt = 'vasanthavalley'
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vasantha Valley
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2bhk East facing, 24/7 security, parking, under CCTV survillence..
        </Typography>
      </CardContent>
      <CardActions>
        
        
        <Button size="small" onClick={handleClick}style={{fontSize:'30px'}}>
          {
            clicked ? <i class="bi bi-hand-thumbs-up-fill"></i> : <i class="bi bi-hand-thumbs-up"></i>
          }
          
        </Button>
  
        <Button size="small" style={{fontSize:'30px'}} ><i class="bi bi-info-circle"></i></Button>
      </CardActions>
    </Card>
    </div>
   
  );
}

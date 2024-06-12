import {  Button, Container, Grid, Link, Stack, Typography } from "@mui/material";
import CardProduct from "./CardProduct";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type TProduct ={
    id: number;
    title: string;
    description: string;
    price: number;
    size: string[];
    color: string;
    img: string;
}

const FlashSale =async () => {
        const res =await fetch('http://localhost:5000/cloths', {
            next:{
                revalidate:30
            }
        })
        const flashProducts = await res.json()
        //  console.log(flashProducts);
    
    return (
        <Container sx={{my:'80px'}}>
            <Stack 
            direction='row' 
            justifyContent='space-between'
            alignItems='center'
            mb={4}
            >
            <Typography sx={{fontSize:'25px' , color:'black'}}fontWeight={600}>Flash Sale</Typography>
                <Button sx={{
                    fontSize:'19px',
                    borderRadius:'25px',
                    py:'10px'
                    }} component={Link} href='/flash-sale'>View All<ArrowForwardIosIcon/>
                    </Button>
            </Stack>
          
           <Grid container spacing={2}>  
                 {
                flashProducts.slice(1,5).map((product:TProduct)=><CardProduct key={product.id} product={product}></CardProduct>)
              }   
           </Grid>

       
         
          
        </Container>
    );
};

export default FlashSale;
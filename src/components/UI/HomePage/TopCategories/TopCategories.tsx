
import {  Container, Grid, Stack, Typography } from "@mui/material";
import CategoriesCard from "./CategoriesCard";

type Ttopcategory ={
    id:string ,
    name:string ,
    gender:string[],
   sizes:string[],
   colors:string[],
   price:number ,
   image:string
  }



const TopCategories = async() => {
   
    const res = await fetch('http://localhost:5000/kids-wear')
    const topCategories = await res.json()
        // console.log(topCategories);

    return (
        <Container>
         <Stack textAlign='center' sx={{mb:'10px'}}>
         <Typography sx={{fontSize:'25px' , color:'black',mb:'18px'}}fontWeight={600}>Top Categories</Typography>
         <Typography component='p' sx={{fontSize:'22px',width:'75%', margin:'0 auto'}}>A product category is a group of similar products that share related characteristics . Product categories help businesses organize, promote, and price products</Typography>
         </Stack>

      <Grid container spacing={4}>
             {
                  topCategories.map((topcategory:Ttopcategory)=><CategoriesCard key={topcategory.id} 
                          topcategory={topcategory}
                        />)
                    }
                </Grid>
     
        </Container>
    );
};

export default TopCategories;
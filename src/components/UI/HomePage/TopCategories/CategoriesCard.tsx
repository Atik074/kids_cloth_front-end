import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';


  type Ttopcategory ={
    id:string ,
    name:string ,
    gender:string[],
   sizes:string[],
   colors:string[],
   price:number ,
   image:string
  }

const CategoriesCard = ({topcategory}:{topcategory:Ttopcategory}) => {
    //   console.log(topcategory);
    return (
        <Grid item xs={4}>

                  <Card sx={{ mt:'18px' }}>
        <CardActionArea>
             <Box sx={{
                    margin:'0 auto' ,
                    width:"300px" ,
                    heigh:"150px",
                    py:3
                }}>
             <Image src={topcategory.image} alt='princess' width={300} height={50}    />

             </Box >
             
          <CardContent>
            <Typography textAlign='center' gutterBottom variant="h5" component="div">
                    {topcategory.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

 </Grid>
     
    );
};

export default CategoriesCard;

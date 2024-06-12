import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

export type TProduct ={
    id: number;
    title: string;
    description: string;
    price: number;
    size: string[];
    color: string;
    img: string;
}

const CardProduct = ({product}:{product:TProduct}) => {
   
    return (
      <Grid item xs={3}>
          <Card sx={{ borderRadius:'10px' }}>
     
        <Image src='https://rlv.zcache.com/construction_big_brother_digging_it_kid_t_shirt-r_dnafj_492.jpg' alt='cloths' width={400} height={400}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {product.title}
          </Typography>
          <Typography sx={{fontSize:'20px'}}  variant="body2" color="text.secondary">
           {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography sx={{fontSize:'21px'}} component='p'>Color:{product.color}</Typography>
          <Typography sx={{fontSize:'21px'}}  component='p'>Price:${product.price}</Typography>
       
        </CardActions>
      </Card>
      </Grid>
    );
};

export default CardProduct;
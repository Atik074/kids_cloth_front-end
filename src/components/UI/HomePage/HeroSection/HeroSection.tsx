import {  Box, Container, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import pic1 from '../../../../assets/bannerImg/BlackTshrrt.jpg'
import pic2 from '../../../../assets/bannerImg/boyWhiteT.jpg'
import pic3 from '../../../../assets/bannerImg/Dobule.jpg'
import pic4 from '../../../../assets/bannerImg/boyDouble.jpg'
import Image from "next/image";

const HeroSection = () => {
    return (
        <Container sx={{
            mt:6
        }}>
        <Stack 
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        gap={2}
    
         >

         <Stack sx={{
              flex:1
         }}>     
            <Typography variant="h4" fontWeight={500} textAlign='center' component='p'>Your Personal Style, Your Fashion <br></br>and comfort  Our Priority</Typography>
            <Typography fontSize='22px' component='p'>High quality inspired kids t-shirts by independent artists and designers from around the world. Childrens clothes on Redbubble are expertly</Typography>
            </Stack>

        <Stack>
            <Box sx={{
                  display:'flex',
                  }}>
               <Image  src={pic1} alt='tshirt' width={300} height={100}/>
               <Image src={pic3} alt='tshirt' width={300} height={100}/>
            </Box>
            <Box sx={{display:'flex'}}>
            <Image src={pic2} alt='tshirt' width={300} height={100}/>
            <Image src={pic4} alt='tshirt' width={300} height={100}/>
            </Box>
            </Stack> 
    

            </Stack>

             
        </Container>
    );
};

export default HeroSection;
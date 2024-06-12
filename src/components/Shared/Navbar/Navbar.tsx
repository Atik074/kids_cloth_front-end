import { Box, Button, Container, Stack, Typography } from '@mui/material';
// import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <Container>
          <Stack 
          py={4}
              direction='row'    
              justifyContent='space-between'
               alignItems='center'
             >
              <Box >
                {/* <Image   width={100} height={50}  src={kidzLogo} alt='kidz-logo'/> */}
                <Typography component={Link} href='/'  fontWeight={800} variant='h4'><span className='text-amber-600'>K</span>idz<span className=' text-orange-600'>O</span>
                n</Typography>
             </Box>
          
             <Stack direction='row' gap={3}>
              <Typography fontSize='22px' component={Link} href='/'>Home</Typography>
              <Typography fontSize='22px' component={Link} href='/'>Categories</Typography>
              <Typography fontSize='22px' component={Link} href='/'>Products</Typography>
              <Typography fontSize='22px' component={Link} href='/'>Flash Sale</Typography>
              <Typography fontSize='22px' component={Link} href='/'>About Us</Typography>
              <Typography fontSize='22px' component={Link} href='/'>Contact Us</Typography>
             </Stack>
             <Button sx={{
                py:1,
                px:3
             }}>Login</Button>
          </Stack>

          
          
        </Container>
    );
};

export default Navbar;
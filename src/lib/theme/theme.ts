import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main:'#1586FD'
        },
        secondary:{
            main:'#666f73'
        }
    },
    typography:{
        body1:{
            color:'#666666'
        }
    },
  components:{
    MuiContainer:{
        defaultProps:{
            maxWidth:'lg'
        } 
    },
    MuiButton:{
        defaultProps:{
            variant:"contained"
        }
    }
  }  
})

theme.shadows[1]='0px 5px 22px lightgray'
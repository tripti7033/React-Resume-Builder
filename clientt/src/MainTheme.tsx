import { createTheme } from "@mui/material";

export const MainTheme=createTheme({
   typography:{
    h2: {
        textAlign: 'center',
        paddingTop: '20px'
    },
    h5: {
        textAlign: 'center',
    },

    h6: {
        color: "rgba(25, 179, 238, 0.8)",
        borderBottom: '1px solid rgba(25, 179, 238, 0.8)',
        padding: '20px 0px 0px 30px',
        fontWeight: '700',
        display: "flex",
        gap: "5px",
        alignItems: "center",
        // paddingTop: '30px',
    },

   }
})
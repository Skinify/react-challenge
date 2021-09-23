import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container:{
        backgroundColor: '#384375',
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        padding:'4%',
        borderRadius: '6px',
        boxShadow: '0px 0px 60px 0px #02020254'
    },
    nextButton:{
        marginTop:'6%',
        maxWidth:'30%',
        minWidth:'100px',
        alignSelf:'flex-end'
    }
})
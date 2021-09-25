import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container: {
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        display: 'flex',
        flexDirection:'column-reverse'
    },
    loadingBar:{
        marginBottom:'12%',
        width:'60px',
        height: '60px',
        border:'20px solid #384375',
        borderBottomColor:'#3f51b5',
        backgroundColor:'transparent',
        borderRadius:'100%'
    }
})
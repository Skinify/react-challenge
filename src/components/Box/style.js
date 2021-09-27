import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    //width: '40%',
    justifyContent: "center",
    padding: "4%",
    borderRadius: "6px",
    boxShadow: theme.shadows[20],
  },
}));

import { makeStyles } from "@material-ui/core";

export default makeStyles({
  container: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column-reverse",
  },
  loadingBar: {
    marginBottom: "12%",
    width: "60px",
    height: "60px",
    border: "8px solid #e2e2e2",
    borderBottomColor: "#3679f5",
    backgroundColor: "transparent",
    borderRadius: "100%",
  },
});

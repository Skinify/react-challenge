import Box from "../components/Box";
import { Typography, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useReportContext } from "../context/ReportContext";
import NextButton from "../components/NextButton";

export default () => {
  const history = useHistory();
  const { report } = useReportContext();
  const pageStyle = makeStyles({
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
  const style = pageStyle();

  return (
    <Box exit={{ opacity: 0 }}>
      <Typography variant="h4">Welcome</Typography>
      <Typography variant="h6">
        Are you ready to challenge your knowledge?
      </Typography>
      {report.length > 0 ? (
        <div className={style.buttonContainer}>
          <NextButton
            size="large"
            variant="contained"
            color="primary"
            onClick={() => history.push("/report/previous")}
          >
            See previous test
          </NextButton>
          <NextButton
            size="large"
            variant="contained"
            color="primary"
            onClick={() => history.push("/level")}
          >
            I'm ready
          </NextButton>
        </div>
      ) : (
        <NextButton
          size="large"
          variant="contained"
          color="primary"
          onClick={() => history.push("/level")}
        >
          I'm ready
        </NextButton>
      )}
    </Box>
  );
};

import { useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import Box from "../components/Box";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import NextButton from "../components/NextButton";
import { useReportContext } from "../context/ReportContext";
import htmlDecoderService from "../services/htmlDecoderService";

const Report = () => {
  const { seePrevious } = useParams();
  const [ready, setReady] = useState(seePrevious ? true : false);
  const { report } = useReportContext();
  const useStyle = makeStyles({
    list: {
      flexDirection: "column",
      alignItems: "start",
      marginBottom: "2%",
      borderRadius: "6px",
    },
  });

  const style = useStyle();
  const history = useHistory();

  if (report.length === 0) return <Redirect to="/level" />;

  if (!ready)
    return (
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        title="You have reached the end of your test"
        subtitle="Are you ready to see the results ?"
      >
        <NextButton
          size="large"
          variant="contained"
          color="primary"
          onClick={() => setReady(true)}
        >
          Yes
        </NextButton>
      </Box>
    );
  else {
    let hits = 0;
    report.forEach((e) => {
      if (e.selectedAnwser === e.correct_answer) hits++;
    });
    return (
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ paddingTop: "4%", paddingBottom: "4%" }}
        title={`Congratulations you got ${hits} out of ${report.length}`}
        subtitle="Review the questions below"
      >
        <List>
          {report.map((e, i) => {
            return (
              <ListItem
                key={i}
                className={style.list}
                style={{
                  backgroundColor:
                    e.correct_answer === e.selectedAnwser
                      ? "#ff3434"
                      : "#2ecc71",
                  color: "#FFF",
                }}
              >
                <ListItemText
                  primary={`${e.questNumber + 1}. ${htmlDecoderService(
                    e.question
                  )}`}
                />
                <Typography variant="subtitle2">
                  Awnser: {htmlDecoderService(e.correct_answer)}
                </Typography>
                <Typography variant="subtitle2">
                  Selected: {htmlDecoderService(e.selectedAnwser)}
                </Typography>
              </ListItem>
            );
          })}
        </List>
        <NextButton
          size="large"
          variant="contained"
          color="primary"
          onClick={() => history.push("/level")}
        >
          Try again
        </NextButton>
      </Box>
    );
  }
};

export default Report;

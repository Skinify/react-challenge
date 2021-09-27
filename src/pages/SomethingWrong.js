import Box from "../components/Box";
import NextButton from "../components/NextButton";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      title="Oops something went wrong"
      subtitle="Why don't you try again ?"
    >
      <NextButton
        size="large"
        variant="contained"
        color="primary"
        onClick={() => history.push("/Level")}
      >
        Ok
      </NextButton>
    </Box>
  );
};

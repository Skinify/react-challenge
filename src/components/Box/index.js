import styles from "./style";
import { motion } from "framer-motion";
import { Typography, useMediaQuery } from "@material-ui/core";

export default (props) => {
  const style = styles();
  const match = useMediaQuery("(min-width:600px)");
  return (
    <motion.div
      style={{
        width: match ? "40%" : "initial",
        height: match ? "initial" : "100vh",
        paddingBottom: match ? "4%" : "0",
        paddingTop: match ? "4%" : "0",
      }}
      className={style.container}
      {...props}
    >
      {(props.title || props.subtitle) && (
        <div style={{ marginBottom: "6%" }}>
          {props.title && <Typography variant="h6">{props.title}</Typography>}
          {props.subtitle && (
            <Typography variant="subtitle1">{props.subtitle}</Typography>
          )}
        </div>
      )}
      {props.children}
    </motion.div>
  );
};

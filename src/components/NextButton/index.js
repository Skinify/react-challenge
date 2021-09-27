import styles from "./style";
import Button from "@material-ui/core/Button";

export default (props) => {
  const style = styles();
  return (
    <Button className={style.nextButton} {...props}>
      {props.children}
    </Button>
  );
};

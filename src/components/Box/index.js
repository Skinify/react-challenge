import styles from './style'
import { motion } from 'framer-motion';
import Typography from '@material-ui/core/Typography';

export default (props) => {
  const style = styles();
  console.log(props.subtitle)
  return (
    <motion.div className={style.container} {...props}>
      {
        ( props.title || props.subtitle ) && 
        <div style={{marginBottom:"6%"}}>
          {
            props.title &&
            <Typography variant="h6">
              {props.title}
            </Typography>
          }
          {
            props.subtitle &&
            <Typography variant="subtitle1">
              {props.subtitle}
            </Typography>
          }
        </div>
      }
        {props.children}
    </motion.div>
  );
};

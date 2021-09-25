import { motion } from 'framer-motion';
import Typography from '@material-ui/core/Typography';
import styles from './style'

export default (props) => {
    const style = styles()
    return (
      <motion.div {...props}    
      className={style.container}         
      initial={{  opacity: 0 }}
      animate={{ opacity: 1  }}
      exit={{ opacity: 0 }}>
          {props.text ?? <Typography variant="h6" >{props.text}</Typography>}
          <motion.div  
          animate={{ rotate: 360 }}
          transition={{ ease: "easeInOut", duration: 1, repeat: Infinity }}
          className={style.loadingBar}></motion.div >
      </motion.div>
    );
  };
  
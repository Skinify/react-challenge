import Button from '@material-ui/core/Button'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import styles from './style'

export default () => {
  const style = styles();
  const history = useHistory();
  return (
      <>
       <Typography variant="h4">
          Bem-vindo
        </Typography>
        <Typography variant="h6">
          Pronto para testar seu conhecimento ?
        </Typography>
        <Button 
          size="large"
          variant="contained" 
          color="primary"
          className={style.nextButton}
          onClick={() => history.push('/level')}
          >
          Estou pronto
      </Button>
      </>
  );
};

import Box from '../components/Box'
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import NextButton from '../components/NextButton';

export default () =>{
    const history = useHistory();

    return (
        <Box exit={{ opacity: 0 }}>
                   <Typography variant="h4">
          Welcome
        </Typography>
        <Typography variant="h6">
          Are you ready to challenge your knowledge?
        </Typography>
        <NextButton 
          size="large"
          variant="contained" 
          color="primary"
          onClick={() => history.push('/level')}
          >
          I'm ready
        </NextButton>
        </Box>
    )
}
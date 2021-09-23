import App from '../components/App'
import Box from '../components/Box'
import { useParams } from 'react-router-dom';

export default () => {
    let { questionsNumber } = useParams();
    return(
        <Box
        initial={{  opacity: 0 }}
        animate={{ opacity: 1  }}
        >
            <a>{questionsNumber}</a>
        </Box>
    )
}
import App from '../components/App'
import Box from '../components/Box'
import NextButton from '../components/NextButton';
import { useParams, useHistory } from 'react-router-dom';
import questionsValidatorService from '../services/questionsValidatorService'

export default () => {
    const { questionsNumber } = useParams();
    const history = useHistory();

    if(questionsValidatorService(questionsNumber)){
        return(
            <Box
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            >
                <a>{questionsNumber}</a>
            </Box>
        )
    }else{
        return(
            <Box
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            title="Oops! Algo deu errado"
            subtitle="Parece que o número de questoes informado é inválido, por favor selecione novamente"
            >
                <NextButton
                size="large"
                variant="contained" 
                color="primary"
                onClick={() => history.push('/Level')}
                >
                    Tentar novamente
                </NextButton>
            </Box>
        )
    }
}
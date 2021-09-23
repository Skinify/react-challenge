import Box from '../components/Box'
import Question from '../components/Question';
import NextButton from '../components/NextButton';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import questionsValidatorService from '../services/questionsValidatorService'
import endpoints from '../config/endpoints.json'
import axios from 'axios';

export default () => {
    const { questionsNumber } = useParams();
    const history = useHistory();
    const [ allQuestions, setAllQuestions ] = useState([])

    const downloadQuestions = async (n) =>{
        const resp = await axios.get(`${endpoints.QUESTIONS_ENDPOINT}amount=${n}`)
        console.log(resp.data)
        setAllQuestions(resp.data.results);
    }

    if(questionsValidatorService(questionsNumber)){
        console.log(allQuestions.length)
        if(allQuestions.length === 0){
            downloadQuestions(questionsNumber)
            return (
                <a>Baixando</a>
            )
        }else{
            return(
                <Box
                initial={{  opacity: 0 }}
                animate={{ opacity: 1  }}
                exit={{ opacity: 0 }}
                >
                    <Question quest={allQuestions[0]}/>
                    <a>{questionsNumber}</a>
                </Box>
            )
        }
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
import Question from '../components/Question';
import { useParams, Redirect } from 'react-router-dom';
import { useState } from 'react';
import questionsValidatorService from '../services/questionsValidatorService'
import endpoints from '../config/endpoints.json'
import Loading from '../components/Loading'
import axios from 'axios';
import {useReportContext} from '../context/ReportContext'


export default () => {
    const { questionsNumber } = useParams();
    const [ allQuestions, setAllQuestions ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ currentQuest, setCurrentQuest ] = useState(0);
    const [ mistakes, setMistakes ] = useState()
    const [ hits, setHit ] = useState()
    const [ questReport, setReport ] = useState([])
    const reportContext = useReportContext().setReport;

    const downloadQuestions = async (n) =>{
        setLoading(true)
        const resp = await axios.get(`${endpoints.QUESTIONS_ENDPOINT}amount=${n}`)
        setAllQuestions(resp.data.results);
        setLoading(false)
    }

    if(!questionsValidatorService(questionsNumber))
        return (
            <Redirect to='/oops'/>
        )

    if(allQuestions.length === 0 && loading === false){
        downloadQuestions(questionsNumber)
    }

    if(currentQuest === allQuestions.length && loading === false && allQuestions.length !== 0)
    {
        reportContext(questReport)
        return (
            <Redirect to='/report'/>
        )
    }
        
    
    if(allQuestions.length > 0 && loading === false){
        return(
            <Question questNumber={currentQuest} questReport={questReport} setReport={setReport} mistakes={mistakes} setMistakes={setMistakes} hits={hits} setHit={setHit} quest={allQuestions[currentQuest]} nextQuestion={() => setCurrentQuest(currentQuest + 1)}/>
        )
    }else{
        return (
            <Loading text="Loading questions"/>
        )
    }
}
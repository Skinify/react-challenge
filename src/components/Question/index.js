import { useState, useEffect } from "react";
import Box from "../Box";
import htmlDecoderService from "../../services/htmlDecoderService";
import questionsType from '../../enums/questionsTypeEnum'
import {Radio, RadioGroup, FormControlLabel, ButtonGroup, Button, Typography} from '@material-ui/core';
import NextButton from "../NextButton";
import styles from "./style";

export default ({quest, questNumber, nextQuestion, questReport, setReport, mistakes, setMistakes, hits, setHit}) =>{    
    const { category, multiple, difficulty, question, type, incorrect_answers, correct_answer } = quest;
    const [allAwnsers, setAllAwnsers] = useState(() => {
        let p = [...incorrect_answers]
        p.push(correct_answer)
        return p.shuffle()
    })

    const [selectedAnwser, setSelectedAwnser] = useState(allAwnsers[0]);
    const [lock, setLock] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        setResult(null);
        let p = [...incorrect_answers]
        p.push(correct_answer)
        setAllAwnsers(p.shuffle())
        setSelectedAwnser(p[0]);
        setLock(false);
    }, [questNumber])

    const style = styles();

    const nextQuestionWrapper = () => {
        if(result)
            setHit(hits + 1)
        else
            setMistakes(mistakes + 1)
        
        let reports = [...questReport]
        reports.push({
            selectedAnwser,
            question,
            questNumber,
            correct_answer
        })

        setReport([...reports])

        nextQuestion()
    }

    const handleQuestType = (questType) =>{
        switch(questType){
            case questionsType.MULTIPLE:{
                return (
                    <>
                        <RadioGroup 
                        defaultValue={allAwnsers[0]}
                        onChange={(e) => setSelectedAwnser(e.target.value)}
                        value={selectedAnwser}
                        >
                            {allAwnsers.map(awnser => {
                                if(awnser === correct_answer && lock === true){
                                    return (<FormControlLabel className={style.radioContainer} disabled={lock} style={{backgroundColor:'#2ECC71'}} key={awnser} value={awnser} control={<Radio disabled={lock}/>} label={htmlDecoderService(awnser)} /> )
                                }else if(awnser === selectedAnwser && lock === true){
                                    return (<FormControlLabel className={style.radioContainer} disabled={lock} style={{backgroundColor:'#C0392B'}} key={awnser} value={awnser} control={<Radio/>} label={htmlDecoderService(awnser)} /> )
                                }else {
                                    return (
                                            <FormControlLabel className={style.radioContainer} disabled={lock} key={awnser} value={awnser} control={<Radio/>} label={htmlDecoderService(awnser)} />        
                                    )
                                }
                            })}
                        </RadioGroup>
                        {
                            !lock&&
                            <NextButton
                                size="large"
                                variant="contained" 
                                color="primary"
                                onClick={() => { setResult(selectedAnwser === correct_answer); setLock(true) }}
                            >
                                Confirm
                            </NextButton>
                        }
                    </>
                );
            }
            case questionsType.BOOLEAN:{
                return (
                    <ButtonGroup className={style.buttonGroup}>
                        {renderBoolButton('True')}
                        {renderBoolButton('False')}
                    </ButtonGroup>
                );
            }
        }
    }

    const renderBoolButton = (e) =>{
        if(lock === false)
            return (
                <Button size="large" variant="contained" color='primary' disabled={lock} 
                        onClick={() => { setResult(e === correct_answer); setLock(true) }}> {e} </Button>
            )
        else 
            return (<Button size="large" variant="contained" style={{backgroundColor: e === correct_answer ? '#2ECC71' : '#C0392B'}} disabled={lock} 
                        onClick={() => { setResult(e === correct_answer); setLock(true) }}> {e} </Button>)
    }

    return(
        <Box
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            title={`${questNumber + 1}. ${htmlDecoderService(question)}`}
            subtitle={htmlDecoderService(category)}
        >
            {handleQuestType(type)}
            { lock && 
            <NextButton
                size="large"
                variant="contained" 
                color="primary"
                onClick={nextQuestionWrapper}
            >
                Next
            </NextButton>}

        </Box>
    )
}
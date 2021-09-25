import { useState, useEffect } from "react";
import Box from "../Box";
import htmlDecoderService from "../../services/htmlDecoderService";
import questionsType from '../../enums/questionsTypeEnum'
import {Radio, RadioGroup, FormControlLabel, ButtonGroup, Button, Typography} from '@material-ui/core';
import NextButton from "../NextButton";
import styles from "./style";

export default ({quest, questNumber, nextQuestion}) =>{    
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
        setSelectedAwnser(allAwnsers[0]);
        setLock(false);
        setResult(null);
        let p = [...incorrect_answers]
        p.push(correct_answer)
        setAllAwnsers(p.shuffle())
    }, [questNumber])

    const style = styles();

    const displayResult = () => {
        if(result === null)
            return null;
        else if(result)
            return <Typography variant="h6" className={style.awnserResolution}>Resposta correta</Typography> 
        else
            return <Typography variant="h6" className={style.awnserResolution}>Resposta incorreta</Typography> 
        
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
                        <Button size="large" variant="contained" color="primary" disabled={lock}
                        onClick={() => { setResult('True' === correct_answer); setLock(true) }}> True </Button>
                        <Button size="large" variant="contained" color="secondary" disabled={lock}
                         onClick={() => { setResult('False' === correct_answer); setLock(true) }}> False </Button>
                    </ButtonGroup>
                );
            }
        }
    }



    return(
        <Box
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            title={`${questNumber}. ${htmlDecoderService(question)}`}
            subtitle={htmlDecoderService(category)}
        >
            {handleQuestType(type)}
            
            { lock && 
            <NextButton
                size="large"
                variant="contained" 
                color="primary"
                onClick={nextQuestion}
            >
                Next
            </NextButton>}

        </Box>
    )
}
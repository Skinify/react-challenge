import Box from '../components/Box'
import { useState } from 'react';
import {Radio, RadioGroup, FormControlLabel, TextField, FormLabel} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import NextButton from '../components/NextButton';
import questionsEnum from '../enums/questionsDifficultEnum';
import questionsConfig from '../config/questions.json'

export default () =>{
        const [ questionsNumber, setQuestionsNumber] = useState(15);
        const [ customValue, setCustomValue ] = useState(1);
        const [ selectedOption, setSelectedOption ] = useState("easy");

        const history = useHistory();

        const handleRadio = (e) => {
                setSelectedOption(e.target.value);
                switch(e.target.value){
                        case questionsEnum.EASY: return setQuestionsNumber(15);
                        case questionsEnum.NORMAL: return setQuestionsNumber(20);
                        case questionsEnum.HARD: return setQuestionsNumber(30);
                        case questionsEnum.CUSTOM: return;
                }
        }

        const handleCustomInput = (e) => {
                if(e.target.value < questionsConfig.MIN_VALUE){
                        setCustomValue(questionsConfig.MIN_VALUE)
                        setQuestionsNumber(questionsConfig.MIN_VALUE)
                }
                else if(e.target.value > questionsConfig.MIN_VALUE){
                        setCustomValue(questionsConfig.MAX_VALUE)
                        setQuestionsNumber(questionsConfig.MAX_VALUE)

                }else{
                        setCustomValue(e.target.value)
                        setQuestionsNumber(e.target.value)
                }
        }

        
        const CustomLevelInput = () => {
                return (
                <>
                        <div>
                                <FormControlLabel value={questionsEnum.CUSTOM} control={<Radio />} label="Custom" />
                                <FormControlLabel labelPlacement="end" value={questionsEnum.CUSTOM} control={<TextField style={{margin:'0 6px'}} disabled={selectedOption !== "custom"} value={customValue} type="number" min="1" InputProps={{ inputProps: { min: 1, max: 100 } }} onChange={(e) => handleCustomInput(e)}/>} label={customValue < 2 ? "question" : "questions" } />
                        </div>
                </>
                )
        }

    return (
            <Box                 
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            title="What is your level of general knowledge ?"
            subtitle="Choose a difficulty"
            >
        <RadioGroup 
                defaultValue={questionsEnum.EASY}
                onChange={handleRadio}
                value={selectedOption}

                >
                <FormControlLabel value={questionsEnum.EASY} control={<Radio/>} label={`Easy (15 questions)`} />
                <FormControlLabel value={questionsEnum.NORMAL} control={<Radio />} label={`Normal (20 questions)`}  />
                <FormControlLabel value={questionsEnum.HARD} control={<Radio />} label={`Hard (30 questions)`}  />
                <CustomLevelInput/>
         </RadioGroup>
                <NextButton 
                        size="large"
                        variant="contained" 
                        color="primary"
                        onClick={() => history.push(`/Questions/${questionsNumber}`)}
                        >
                        Next
                </NextButton>
            </Box>
    )
}
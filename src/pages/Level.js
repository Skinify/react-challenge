import Box from '../components/Box'
import { useState } from 'react';
import {Radio, RadioGroup, FormControlLabel, TextField} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import NextButton from '../components/NextButton';
import questionsEnum from '../enums/questionsEnum';

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
                if(e.target.value < 1){
                        setCustomValue(1)
                        setQuestionsNumber(1)
                }
                else if(e.target.value > 50){
                        setCustomValue(50)
                        setQuestionsNumber(50)

                }else{
                        setCustomValue(e.target.value)
                        setQuestionsNumber(e.target.value)
                }
        }

        
        const CustomLevelInput = () => {
                return (
                <>
                        <div>
                                <FormControlLabel value={questionsEnum.CUSTOM} control={<Radio />} label="Customizado" />
                                <TextField disabled={selectedOption !== "custom"} value={customValue} type="number" min="1" InputProps={{ inputProps: { min: 1, max: 100 } }} onChange={(e) => handleCustomInput(e)}/>
                        </div>
                </>
                )
        }

    return (
            <Box                 
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            title="Qual é o seu nivel de conhecimento geral ?"
            subtitle="Escolha alguma das opções abaixo"
            >
        <RadioGroup 
                defaultValue={questionsEnum.EASY}
                onChange={handleRadio}
                value={selectedOption}

                >
                <FormControlLabel value={questionsEnum.EASY} control={<Radio/>} label="Fácil" />
                <FormControlLabel value={questionsEnum.NORMAL} control={<Radio />} label="Normal" />
                <FormControlLabel value={questionsEnum.HARD} control={<Radio />} label="Difícil" />
                <CustomLevelInput/>
         </RadioGroup>
                <NextButton 
                        size="large"
                        variant="contained" 
                        color="primary"
                        onClick={() => history.push(`/Questions/${questionsNumber}`)}
                        >
                        Continuar
                </NextButton>
            </Box>
    )
}
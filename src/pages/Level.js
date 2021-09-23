import Box from '../components/Box'
import { useState } from 'react';
import {Radio, RadioGroup, FormControlLabel, TextField} from '@material-ui/core';
import NextButton from '../components/NextButton';

export default () =>{
        const [ customValue, setCustomValue ] = useState(1);
        const [ selectedOption, setSelectedOption ] = useState("easy");

        const handleRadio = (e) => {
                setSelectedOption(e.target.value);
        }

        const handleCustomInput = (e) => {
                if(e.target.value < 1){
                        setCustomValue(1);
                }
                else if(e.target.value > 50){
                        setCustomValue(50);

                }else{
                        setCustomValue(e.target.value); 
                }
        }

        
        const CustomLevelInput = () => {
                return (
                <>
                        <div>
                                <FormControlLabel value="custom" control={<Radio />} label="Customizado" />
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
                defaultValue="easy"
                onChange={handleRadio}
                value={selectedOption}

                >
                <FormControlLabel value="easy" control={<Radio/>} label="Fácil" />
                <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                <FormControlLabel value="hard" control={<Radio />} label="Difícil" />
                <CustomLevelInput/>
         </RadioGroup>
                <NextButton 
                        size="large"
                        variant="contained" 
                        color="primary"
                        >
                        Continuar
                </NextButton>
            </Box>
    )
}
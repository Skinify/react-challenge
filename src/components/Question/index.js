import Box from "../Box";
import htmlDecoderService from "../../services/htmlDecoderService";

export default ({quest, questNumber}) =>{
    const { category, multiple, difficulty, question, type, incorrect_answers } = quest;


    const handleQuestType = () =>{
        return <a>Salve</a>
    }


    return(
        <Box
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            title={`${questNumber}. ${htmlDecoderService(question)}`}
            subtitle={htmlDecoderService(category)}
        >
            {handleQuestType()}


        </Box>
    )
}
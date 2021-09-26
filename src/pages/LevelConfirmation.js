import { Button, makeStyles } from "@material-ui/core"
import Box from "../components/Box"
import { useHistory, useParams, Redirect } from "react-router-dom"
import {useReportContext} from '../context/ReportContext'
import questionsValidatorService from '../services/questionsValidatorService'

export default () => {
    const history = useHistory()
    const { questionsNumber } = useParams();
    const { setReport } = useReportContext()
    const pageStyle = makeStyles({
        buttonContainer:{
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }
    })
    const style = pageStyle();

    if(!questionsValidatorService(questionsNumber))
        return (
            <Redirect to='/oops'/>
        )

    return (
        <Box
        initial={{  opacity: 0 }}
        animate={{ opacity: 1  }}
        exit={{ opacity: 0 }}
        title={`The test will contain ${questionsNumber} ${questionsNumber > 1 ? 'questions' : 'question'}`}
        subtitle={`Let's start ?`}
        >
            <div className={style.buttonContainer}>
                <Button
                    size="large"
                    variant="contained" 
                    color="secondary"
                    onClick={() => history.push(`/level`)}
                >
                    Cancel
                </Button>
                <Button
                    size="large"
                    variant="contained" 
                    color="primary"
                    onClick={() => { setReport([]); history.push(`/Questions/${questionsNumber}` )}}
                >
                    Start
                </Button>
            </div>
        </Box>
    )
}
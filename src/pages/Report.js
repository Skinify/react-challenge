import { useState } from "react"
import { Redirect } from "react-router"
import Box from "../components/Box"
import NextButton from "../components/NextButton"
import {useReportContext} from '../context/ReportContext'

const Report = () =>{
    const [ready, setReady] = useState(false)
    const {report, setReport} = useReportContext();

    if(report.length === 0)
        return <Redirect to="/level"/>

    if(!ready)
        return (
            <Box 
            initial={{  opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            title="You have reached the end of your test"
            subtitle="Are you ready to see the results ?"
            >
                <NextButton
                    size="large"
                    variant="contained" 
                    color="primary"
                    onClick={() => setReady(true)}
                >
                    Yes
                </NextButton>
            </Box>
        )    
    else
        return (
            <a>AAAAAA</a>
        )
}

export default Report
import questionsConfig from "../config/questions.json"

export default (n) => {
    try{
        n = parseInt(n)
        if(isNaN(n))
            return false;

        if(n > questionsConfig.MAX_VALUE)
            return false;

        if(n < questionsConfig.MIN_VALUE)
            return false;

        return true;

    }catch(err){
        return false;
    }
}
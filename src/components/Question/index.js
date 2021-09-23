export default ({quest}) =>{
    const {category, multiple, difficulty, question, type, incorrect_answers} = quest;

    return(
        <>
            <a>{category}</a>
        </>
    )
}
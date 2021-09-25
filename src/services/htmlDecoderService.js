const parser = new DOMParser();

export default (text) => {
    try{
        let parsed = parser.parseFromString(text, "text/html")
        return parsed.documentElement.textContent
    }catch(err){
        console.log(err)
        return "";
    }
}
const output = require("@output");

const handler = async (event) =>{
    
    if(event.httpMethod == "GET"){
        return output("get")
    }
    return output({})
    }

module.exports= {handler}

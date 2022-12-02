function output(content){

    try{
        return{
            statuscode: 200,
            body: JSON.stringify(content),
        }

    }catch(error) {
        return{
            statuscode: 500,
            body: error.toString(),
        }

    }
}
module.exports = output

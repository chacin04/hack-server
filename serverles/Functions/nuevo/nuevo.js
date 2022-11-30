const handler= async (event) => {
    try {
        
        return{
            statusCode:200,
            body:JSON.stringify({message: "Que hay de nuevo viejo" }),
        }

    }catch (error){

        return {statusCode:500
            ,body:error.toString()}



    }
}
module.exports= { handler }
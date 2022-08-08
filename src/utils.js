const  request =  require ("request")

const know_the_cocktails = function (ing,callback){
    if (String(ing)){
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ing

        request(url,(error,res, body)=>{
            if (error){
               
                callback("unable to fetch data...")

            }
            if (!error && res.statusCode == 200){
          
               callback(undefined, JSON.parse(body).drinks)
            }

        })
    }

}


const know_the_ingredient = function (ing,callback){
    if (String(ing)){
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+ing

        request(url,(error,res, body)=>{
            if (error){
               
                callback("unable to fetch data...")

            }
            if (!error && res.statusCode == 200){
                console.log(body)
               callback(undefined, JSON.parse(body).ingredients[0])
            }

        })
    }

}

module.exports = {
    know_the_cocktails,
    know_the_ingredient
}

const express = require("express")
const path = require("path")
const hbs = require("hbs")
const utils = require ("./utils")

const app = express()


// dynamic templating engine set (handlebar)
const viewsPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
const staticPath = path.join(__dirname,"../static")

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(staticPath))



app.get("",(req,res)=>{
    if (!req.query.cock){
        console.log({
            title: "index",
            isIndex: true,
            fresh: true
        })
        return res.render("index",{
            title: "index",
            isIndex: true,
            fresh: true
        })
    }
    else{
        utils.know_the_cocktails(req.query.cock,(err,response)=>{
            if (err){
                console.log({
                    title: "index",
                    isIndex: true,
                    error: true,
                    response: err
                })
                return res.render("index",{
                    title: "index",
                    isIndex: true,
                    error: true,
                    response: err
                })
            }
            else{
                if (response){
                    console.log({
                        title: "index",
                        isIndex: true,
                        response: response
                    })
                    return res.render("index",{
                        title: "index",
                        isIndex: true,
                        response: response
                    })
                    

                }
                else{
                    console.log({
                        title: "index",
                        isIndex: true,
                        error: true,
                        response: "no such cocktail found!!"
                    })
                    return res.render("index",{
                        title: "index",
                        isIndex: true,
                        error: true,
                        response: "no such cocktail found!!"
                    })
                }
            }
        })
    }

})

app.get("/ingred",(req,res)=>{
    if (!req.query.ing){
        console.log({
            title: "ingredient",
            isIngredient: true,
            fresh: true
        })
        return res.render("ingredient",{
            title: "ingredient",
            isIngredient: true,
            fresh: true
        })
    }
    else{
        utils.know_the_ingredient(req.query.ing,(err,response)=>{
            if (err){
                console.log({
                    title: "ingredient",
                    isIngredient: true,
                    error: true,
                    response: err
                })
                return res.render("ingredient",{
                    title: "ingredient",
                    isIngredient: true,
                    error: true,
                    response: err
                })
            }
            else{
                if (response){
                    console.log({
                        title: "ingredient",
                        isIngredient: true,
                        response: response
                    })
                    return res.render("ingredient",{
                        title: "ingredient",
                        isIngredient: true,
                        response: response
                    })
                    

                }
                else{
                    console.log({
                        title: "ingredient",
                        isIngredient: true,
                        error: true,
                        response: "no such ingredient found!!"
                    })
                    return res.render("ingredient",{
                        title: "ingredient",
                        isIngredient: true,
                        error: true,
                        response: "no such ingredient found!!"
                    })
                }
            }
        })
    }

})

app.get("/shorthand",(req,res)=>{
    res.render("shorthand",{
        title: "shorthand",
        isShorthand: true,
        fresh: true
    })
})


app.listen(5000, ()=> console.log("ok I am listening on port 5000"))





// // pick the name from argument 
// var ing_name = (process.argv[2])

// if (ing_name){
    
//     utils.know_the_ingredients(ing_name, (err,res)=>{
//         if (err){
//             console.log(err)
//         }
//         else{
//             if (res){
//                 console.log(res[0])
//             }
//             else{
//                 console.log("umm, no record")
//             }
           
            
//         }
//     })

// }
function greeting(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = false
            if (success){
                resolve("hello good morning every one")
            }else{
                reject("no one to greet still people are sleeping")
            }

        },2000)
    })
}

async function greetingResult(){
    try{
        const salaan = await greeting()
        console.log(salaan)
    }catch(err){
        console.log(err)
    }

}

greetingResult()
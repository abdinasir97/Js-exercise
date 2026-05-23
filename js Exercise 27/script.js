function greeting(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = false
            if (success){
                resolve ("hell good morning every one")
            }else{
                reject("no one to greet still people are sleeping")
            }

        },2000)

    })
}

greeting()
        .then((greet)=>console.log(greet))
        .catch((err)=>console.log(err))
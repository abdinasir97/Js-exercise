function ogaysiis(){
    alert("waxaa dhamaan ardayda js la ogaysiinayaa inay dadaalaan!!!!");
    return ("kudadaal synchronize iyo Asynchronize")
}

console.log("hambalyo waxaan baranhayaa js")

let result = ogaysiis()
console.log("waxaan rajaynhayaa inaan todobaadkan dhameeyo koorsadan")
console.log("js waa muhiim markaad baranayso web develobment")


function ogsoonoow(callback){
    setTimeout(()=>{
        const xog = "dadaalku waa muhiim markaad waxbaranayso"
        callback(xog)
    },2000)
}

console.log("koorsadan waa inaan dhameeyaa sida ugu dhaksahabadan");
ogsoonoow(function(xog){
    console.log(xog)
})
console.log("digniinahan waa inaad qaadataan dhamaantiin")
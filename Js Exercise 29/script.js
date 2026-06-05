async function myExercise() {
    const getData = await fetch('data.json')
    console.log(getData)
}


myExercise()
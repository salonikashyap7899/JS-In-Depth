let a = 10
let b = 20 

let result = a + b
console.log(result)

// async function getData (){
//    let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts")
//    console.log(await resultFromServer.json())
// }

fetch("https://jsonplaceholder.typicode.com/posts")
.then((data) => {
    console.log(data.json())
}).catch((err) => {
    console.log(err)
})

getData()



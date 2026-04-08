// The async function declaration creates a binding of a new async function to a given name. T
// he await keyword is permitted within the function body, enabling asynchronous, 
// promise-based behavior to be written in a cleaner style and avoiding the need to
//  explicitly configure promise chains.
let a = 10
let b = 20 

let result = a + b
console.log(result)

async function getData (){
   let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts")
   console.log(await resultFromServer.json())
}

fetch("https://jsonplaceholder.typicode.com/posts")
.then((data) => {
    console.log(data.json())
}).catch((err) => {
    console.log(err)
})

getData()



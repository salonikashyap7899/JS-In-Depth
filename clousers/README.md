# JS-In-Depth
# 🚀 Advanced JavaScript Concepts

This project demonstrates important **core JavaScript concepts** that are frequently asked in technical interviews. It is designed to strengthen fundamentals and improve problem-solving skills for frontend and full-stack developer roles.

---

## 📚 Topics Covered

### 🔹 Closures

Closures allow a function to access variables from its outer (parent) scope even after the parent function has executed.

```js
function closure(){
    const name = "Isalo";

    function innerFunc(){
        console.log(name); // Accessing parent scope
    }

    innerFunc();
}
closure();
```

---

### 🔹 Promises & Async/Await

Used for handling asynchronous operations in JavaScript.

```js
const fetchData = async () => {
    return "Data fetched successfully";
};

fetchData().then(console.log);
```

---

### 🔹 Event Loop

JavaScript handles asynchronous operations using the event loop, call stack, and callback queue.

---

### 🔹 Hoisting

Variables and functions are moved to the top of their scope before execution.

```js
console.log(a); // undefined
var a = 10;
```

---

### 🔹 Callbacks

A function passed as an argument to another function.

```js
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
```

---

### 🔹 `this` Keyword

Refers to the object that is currently executing the function.

```js
const obj = {
    name: "Isalo",
    greet() {
        console.log(this.name);
    }
};
obj.greet();


## 🎯 Purpose

* Strengthen JavaScript fundamentals
* Prepare for frontend/full-stack interviews
* Understand how JavaScript works under the hood



## 🛠️ Tech Stack

* HTML
* JavaScript (ES6+)



## ▶️ How to Run

1. Clone the repository
2. Open the project in VS Code
3. Run using Live Server
4. Open Developer Console to see outputs

---

## 📌 Author

**Saloni Kashyap**
Frontend / Full Stack Developer

---

## ⭐ Notes

Mastering these concepts will help you clear **70–80% of JavaScript interview questions**.

---

# Task 1

```javascript
function changePlaceholder (element,value){
    element.placeholder = value;
    console.log(element,value)
}

const userName = document.getElementsByClassName("userName")[0]
const userEmail = document.getElementsByClassName("userEmail")[0]
const userMessage = document.getElementsByClassName("userMessage")[0]
const enterName = document.getElementsByClassName("enterName")[0]
const enterEmail = document.getElementsByClassName("enterMail")[0]
const enterMessage = document.getElementsByClassName("enterMessage")[0]
changePlaceholder(enterName,"FSJS 2.0")
changePlaceholder(userName,"FSJS 2.0")
changePlaceholder(userEmail,"fsjs@ineuron.ai")
changePlaceholder(enterEmail,"fsjs@ineuron.ai")
changePlaceholder(enterMessage,"Hello World")
changePlaceholder(userMessage,"Hello World")

```




![Task 1 output](./task1Output.png)
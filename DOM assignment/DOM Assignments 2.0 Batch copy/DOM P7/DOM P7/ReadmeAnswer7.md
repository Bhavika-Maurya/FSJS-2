# Assignment 7.1

```Javascript
// Task 01

let languages = Array.from(document.querySelectorAll(".main__languages > a"))
languages.forEach(elem => {
    if (elem.innerText.includes("2.0")) {
        elem.style.display = "none"
    }
})
```

![7.1 output](./ass7.1-after.png)

# Assignment 7.2

```Javascript
//Task 02
const submitBtn = document.getElementsByClassName('main__form-btn')[0];
submitBtn.disabled = false;
const inputField = document.getElementsByClassName('main__form-input')[0];
inputField.disabled = false;
let namesValue;
const language = document.querySelector(".main__languages")
const names = localStorage.getItem('names');
if (names) {
    namesValue = JSON.parse(names);

} else {
    namesValue = [];
}
submitBtn.addEventListener('click', () => {
    const inputValue = inputField.value;
    namesValue.push(inputValue)
    localStorage.setItem('names', JSON.stringify(namesValue))
})

// function to add text in left card

function addText() {
    const aTag = language.getElementsByTagName('a')[0];
    namesValue.forEach(text => {
        const aTagNew = aTag.cloneNode(true);
        aTagNew.innerText = text;
        language.appendChild(aTagNew)

    })
}
addText();

```


![7.2 output](./ass7.2-after.png)
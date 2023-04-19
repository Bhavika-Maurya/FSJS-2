# Task 1

```Javascript

// changing background color of all headings inside accordian
let accordianHeadings = Array.from(document.querySelectorAll(".accordian > h3"));

accordianHeadings.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
    let para = h3.nextElementSibling;

    //When page loads below accordians will be open
    if (["Achievement", "Hobbies"].includes(h3.innerText)) {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
})

```

![task 1 output](./task1Output.png)

# Task 2

```Javascript

const accordianWrapper = document.querySelector(".accordian-wrapper");
const div = document.createElement("div");
div.classList.add("accordian")
const fifthAccordian = accordianWrapper.appendChild(div);
const skillHeading = document.createElement("h3");
skillHeading.innerText = "Skills";
const skills = fifthAccordian.appendChild(skillHeading);
const skillPara = document.createElement("p");
skillPara.style.display = "block"
skillPara.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub";
fifthAccordian.appendChild(skillPara)
accordianHeadings = Array.from(document.querySelectorAll(".accordian > h3"));
accordianHeadings.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
    let para = h3.nextElementSibling;
    if (["Skills"].includes(h3.innerText)) {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
})

```


![task 2 output](./task2Output.png)
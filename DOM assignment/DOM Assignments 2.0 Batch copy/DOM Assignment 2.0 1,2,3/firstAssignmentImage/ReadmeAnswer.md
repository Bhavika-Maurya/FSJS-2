# Task 1
```
//Adding li to ul

const ul = document.getElementsByTagName("ul")[0];
const hireMe = document.createElement("li");
hireMe.innerText = "Hire Me";
ul.appendChild(hireMe);
```

//Hiding Social Media Icons

const socialMediaIcons = document.getElementsByTagName("ul")[1];
socialMediaIcons.style.display = "none";

// edit li
 
const ul = document.getElementsByTagName("ul")[0];
const contact = document.getElementsByTagName("li")[2];
contact.textContent = "Projects";


[Task1 Output](./task1Output.png)


# Task 2

//Hiding Social Media Icons

const socialMediaIcons = document.getElementsByTagName("ul")[1];
socialMediaIcons.style.display = "none";

// edit li
 
const ul = document.getElementsByTagName("ul")[0];
const contact = document.getElementsByTagName("li")[2];
contact.textContent = "Projects";

// Search placeholder

const searchInput = document.querySelector(".search-field > input");
searchInput.placeholder = "Search My Project";

[Task2 Output](task2Output.png)

# Task 3

//Selecting all spans inside paragraphs in  hero-left-section class and changing their inner text
const span = Array.from(document.querySelectorAll(".hero-left-section > p > span"));
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt. Ltd."

[Task 3 Output](task3Output.png)

# Task 4

//Changing profile image
const profileImage = document.querySelector(".hero-right-section > img")
profileImage.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

[Task 4 Output](task4Output.png)

# Task 5

const btnContainer = document.querySelector('.hero-right-section-btns');
const btnSupport = document.createElement("button");
btnSupport.innerText = "Support Me";
btnContainer.appendChild(btnSupport);

[Task 5 Output](task5Output.png)

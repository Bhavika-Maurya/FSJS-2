# Task 8.1 
```Javascript 
// Task-1
const newsContainer = document.getElementsByClassName('col-lg-4 new')[0];
newsContainer.style.overflow = "scroll"
const h2 = document.getElementsByClassName("new-head")[2];
const p = document.getElementsByClassName('new-p')[2];
const line = document.getElementsByClassName('hr-line')[1];
console.log(h2, p, line)
const newLine = line.cloneNode(true);
const newHeading = h2.cloneNode(true)
newHeading.innerText = "This is my Custom Heading"
const newPara = p.cloneNode(true)
newPara.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim massa ut dui rutrum, vel hendrerit ipsum tempus. In purus ante, tincidunt id ornare quis, dignissim nec "
p.insertAdjacentElement('afterend', newLine).insertAdjacentElement('afterend', newHeading).insertAdjacentElement("afterend", newPara)
```


![task 8.1 output](./ass8.1-after.png)

# Task 8.2 

```Javascript 
//Task-2
document.body.style.backgroundImage = "none";
```

![task 8.2 output](./ass8.2-after.png)

# Task 8.3
```Javascript 
const collapseNavbar = document.getElementsByClassName('collapse')[0];
collapseNavbar.style.display = "flex";
```

![task 8.3 output](./ass8.3-after.png)
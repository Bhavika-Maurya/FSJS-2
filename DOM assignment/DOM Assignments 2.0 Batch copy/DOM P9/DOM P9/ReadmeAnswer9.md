# Task 9.1 

```Javascript
const title = document.querySelector('.caption > .title')
title.style.color = "#dc143c";
```

![task 9.1](./ass9.1-after.png)

# Task 9.2 

```Javascript
const addToCardBtn = document.getElementsByClassName('add-to-cart')[0];
addToCardBtn.addEventListener('mouseenter', ()=>{
    addToCardBtn.style.backgroundColor = "#dc143c";
})
addToCardBtn.addEventListener('mouseleave', ()=>{
    addToCardBtn.style.backgroundColor = "hsl(157, 37%, 20%)";
})

```

![task 9.2](./ass9.2-after.png)
# Assignment 5

```javascript
const btn = document.getElementsByClassName('btn')[0]
const btnSunscription = btn.cloneNode(true);
btnSunscription.innerText = "Pro Subscription"
btn.insertAdjacentElement('afterend', btnSunscription)
const bevarages = document.querySelectorAll('.tags-container  div > a')[5];
const chinese = bevarages.cloneNode(true)
chinese.innerText = "Chinese(7)"
bevarages.insertAdjacentElement('afterend', chinese);
const card5 = document.getElementsByClassName("card")[4];
const card6 = card5.cloneNode(true);
card6.innerHTML = "<h1>Add 6th card here</h1>"
card5.insertAdjacentElement("afterend", card6)

```


![Assignment 5](./Output/DOM%20P2%20SS.png)
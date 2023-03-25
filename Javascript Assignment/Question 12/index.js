/* 12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm   */

let today = new Date();
let year = today.getFullYear();
let month = (today.getMonth() + 1).toString().padStart(2, '0');
let date = today.getDate().toString().padStart(2, '0');
let hours = today.getHours().toString().padStart(2, '0');
let minutes = today.getMinutes().toString().padStart(2, '0');
let time = `${year}-${month}-${date} ${hours}:${minutes}`;
console.log(time);

//DD-MM-YYYY HH:mm
let time2 = `${date}-${month}-${year} ${hours}:${minutes}`;
console.log(time2);

//DD/MM/YYYY HH:mm 

let time3 = `${date}/${month}/${year} ${hours}:${minutes}`;
console.log(time3);
console.log("hii there!");
let count =0;
let kon="Who are you";
let id=setInterval(() => {
    console.log(kon);
    count++;
},1000);
console.log("Lalit Agnihotri");
setInterval(() => {
  clearInterval(id);
}, 5000);
setTimeout(() => {
     console.log(`${count} no of time i asked ${kon}`)
},5000);


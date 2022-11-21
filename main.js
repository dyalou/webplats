const change = document.getElementById("demo");
change.style.color = "red";
change.style.background = "green";
console.log(change);
const dele = document.querySelector(".non");
dele.remove();
const s1 = document.getElementById("S1");
const title = document.createElement("h1");
s1.append(title);



title.innerHTML="Diala kul";
title.remove();
const para = document.createElement("h2");
s1.append(para);
para.classList.add("first");
para.innerHTML="I am learning jS"

const para1 = document.createElement("h3");
para1.setAttribute("id","hi")
s1.append(para1);
para1.innerHTML="Iam enjoing";
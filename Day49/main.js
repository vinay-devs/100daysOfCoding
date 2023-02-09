const container=document.querySelector(".container");

const url="https://source.unsplash.com/random/"
const row=9;

for(let i=0;i<row*4;i++){
    const img=document.createElement("img");
    img.src=`${url}/${randomSize()}`
    container.append(img);
}

function randomSize(){
    return `${randomNo()}x${randomNo()}`;
}

function randomNo(){
    return Math.floor(Math.random()*10+300);
}
const para=document.querySelector('.sentence');
const input=document.querySelector(".speed");
const text="We Love Javascript";
let idx=1;
let speed=input.value;
function writeText(){
    para.innerHTML=text.slice(0,idx);
    idx++;
    if(idx>text.length){
        idx=1;
    }
    setTimeout(writeText,speed);
}
writeText();

input.addEventListener("input",(e)=>{
    speed=300/e.target.value;
})

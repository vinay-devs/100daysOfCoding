const tagsEl=document.getElementById('tags');
const textArea=document.getElementById("text-area");

textArea.addEventListener('keyup',(e)=>{
    createTag(e.target.value); 
    if(e.key==='Enter'){
       
        setTimeout(()=>{
            e.target.value='';
        },10)
        randomSelect()
    }
})

function createTag(inputs){
    const tags=inputs.split(",").filter(tag=>tag.trim()!=='').map(tag=>tag.trim());
    tagsEl.innerHTML='';
    tags.forEach(tag=>{
        const tagEl=document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML=tag;
        tagsEl.append(tagEl);
    })

}

function randomSelect(){
    const times=30;
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

const highlightTag = (tag) => {
    tag.classList.add("highlights");
}

const unhighlightTag = (tag) => {
    tag.classList.remove("highlights");
}

function pickRandomTag(){
    const tags=document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random()*tags.length)]
}
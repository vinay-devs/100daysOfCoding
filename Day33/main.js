const btn=document.getElementById('btn');
const notification=document.getElementById('notification');

const message=[
    "Message One","Message Two", "Message Three", "Message Four", " Message Five"
]

const types=['info','success','error'];

btn.addEventListener('click',()=>{
    showNotify();
})

function showNotify(message=null,type=''){
    const notify=document.createElement('div');
    notify.classList.add('notif');
    notify.classList.add(type ?type:getRandomType());
    notify.innerHTML=message?message:getRandomMessage();

    notification.append(notify);
    setTimeout(()=>{
        notify.remove();
    },4000);
}

const getRandomMessage=()=>{
    return message[Math.floor(Math.random()*message.length)];
}
const getRandomType=()=>{
    return types[Math.floor(Math.random()*types.length)];
}